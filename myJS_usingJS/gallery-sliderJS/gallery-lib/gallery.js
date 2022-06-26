const GalleryClassName = 'gallery'; // задаємо клас для контейнера всієї галереї
const GallaryDraggableClassName = 'gallery-draggable'; // задаємо клас для курсорa-лапки
const GalleryLineClassName = 'gallery-line'; // задаємо клас для лінії(серії) слайдів
const GallerySlideClassName = 'gallery-slide'; // задаємо клас для самого слайда

// створюємо html-галерею через "Class" для можжливості додавання інших галерей
class Gallery {
    // передаємо в конструктор - основний створюваний елемент-обгортку та параметр для опцій (по замовчуванню-пустий обєкт)
    constructor(element, options={}) {
        this.containerNode = element;  // визначаємо перший основний параметр куда передаємо основний елемент-обгортку
        this.size = element.childElementCount;  // визначаємо кількість слайдів в галереї
        this.currentSlide = 0; // визначаємо слайд, який буде активний при запуску галереї
        this.currentSlideWasChanged = false; // визначаємо стан слайду при запуску галереї
        this.settings = { // визначаємо марджин між слайдами
            margin: options.margin || 0
        }

        this.manageHTML =  this.manageHTML.bind(this); // прив'язуємо контекст для конструктора при виклику методу створ слайдів
        this.setParameters =  this.setParameters.bind(this); // прив'язуємо контекст для конструктора при виклику методу задання параметрів
        this.setEvents =  this.setEvents.bind(this); // прив'язуємо контекст для конструктора при виклику методу події
        this.resizeGallery = this.resizeGallery.bind(this); // прив'язуємо контекст для конструктора при перевизначенні параметрів у разі зміни розмірів вікна браузера
        this.startDrag = this.startDrag.bind(this); // прив'язуємо контекст для конструктора при початку перетягування
        this.stopDrag = this.stopDrag.bind(this); // прив'язуємо контекст для конструктора при закінченні перетягування
        this.dragging = this.dragging.bind(this); // будуть здійснюватись усі обрахунки переміщення слайдів
        this.setStylePosition = this.setStylePosition.bind(this);

        this.manageHTML();  // викликаємо метод створення слайдів (елементи-обгортки)
        this.setParameters(); // викликаємо метод для задання параметрів: ширини лінії слайдів та ширини самого слайда
        this.setEvents(); // викликаємо метод для виконання події
        // this.destroyEvents(); // виклик метода для очистки усіх подій при зміні розмірів вікна браузера
    }

    // визначаємо склад основного елементу-обгортки
    manageHTML() {
        this.containerNode.classList.add(GalleryClassName); // додаємо клас "GalleryClassName" в контейнер 
        // змінюємо внутрішній контекст html-елемента (контейнера із лінією слайдів)
        this.containerNode.innerHTML = `
            <!-- задаємо клас для контейнера із лінією слайдів -->
            <div class="${GalleryLineClassName}">
                <!-- поміщаємо туди html-елемент (слайди) -->
                ${this.containerNode.innerHTML}
            </div>
        `;
        
        // визначаємо змінну для лінії слайдів
        this.lineNode = this.containerNode.querySelector(`.${GalleryLineClassName}`);

        /* визначаємо змінну для самих слайдів - пробігаючи по всіх "дітях" (this.lineNode), робимо з них масив щоб використати метод масивів "map", потім беремо кожен елемент і викликаємо для нього функцію (wrapElementByDiv): */
        this.slideNodes = Array.from(this.lineNode.children).map(childNode =>
            wrapElementByDiv({
                element: childNode,
                className: GallerySlideClassName
            })
        );
    }

    // визначаємо склад другого параметра - опції
    setParameters() {
        // задаємо ширину самої контейнер-gallery
        const coordsContainer = this.containerNode.getBoundingClientRect(); // отримуємо усі координати контейнер-gallery
        this.width = coordsContainer.width; // беремо тільки ширину контейнер-gallery
        this.maximumX = -(this.size - 1) * (this.width + this.settings.margin); // для велечини "важкості" відриву крайніх слайдів
        this.x = -this.currentSlide * (this.width + this.settings.margin); // збережемо здвиг слайда в окрему властивість "x"

        this.resetStyleTransition(); // щоб затирало все і не було глюка появи слайдів один під одним

        // задаємо ширину лінії слайдів: кількість слайдів (this.size) * ширину слайда (this.width)
        this.lineNode.style.width = `${this.size * (this.width + this.settings.margin)}px`;

        this.setStylePosition(); // щоб затирало все і не було глюка появи слайдів один під одним

        /* задаємо ширину самого слайда: пробігаємось по кожному слайду методом forEach, перед цим перетворивши slideNodes в масив, та присвоюємо велечину ширини слайда: */
        Array.from(this.slideNodes).forEach(slideNode => {
            slideNode.style.width = `${this.width}px`;
            slideNode.style.marginRight = `${this.settings.margin}px`;
        });
    }

    // визначаємо подію на випадок зміни галереї клієнтом у вікні браузера
    setEvents() {
        // шоб не викликалось дууууже багато раз огортаємо в функцію "debounce"
        this.debouncedResizeGallery = debounce(this.resizeGallery);
        window.addEventListener('resize', this.debouncedResizeGallery);
        
        this.lineNode.addEventListener('pointerdown', this.startDrag); // починаємо перетягування
        window.addEventListener('pointerup', this.stopDrag); // зупиняємо перетягування (відпускаємо мишку)
        window.addEventListener('pointercansel', this.stopDrag); // щоб забрати баг замирання перелистування
    }

    // обов'язково також метод для очистки події перевизначення вікна браузера
    destroyEvents() {
        window.removeEventListener('resize', this.debouncedResizeGallery);
        this.lineNode.removeEventListener('pointerdown', this.startDrag); // починаємо перетягування
        window.removeEventListener('pointerup', this.stopDrag); // зупиняємо перетягування (відпускаємо мишку)
        window.removeEventListener('pointercansel', this.stopDrag); // щоб забрати баг замирання перелистування
    }

    /* перевизначаємо/перераховуємо те, що було встановлено при запуску галереї: ширину галереї та ширину самого слайда */
    resizeGallery() {
        this.setParameters();
    }

    startDrag(evt) {
        this.currentSlideWasChanged = false; // встановлюємо прапорець стану слайду до початку його заміни
        this.clickX = evt.pageX; // цікавить тільки рух по горизонталі, тому тільки вісь Х
        this.startX = this.x; // зберігаємо стартову позицію на якій закінчили перетягувати слайд

        this.resetStyleTransition(); // для плавної заміни слайдів

        this.containerNode.classList.add(GallaryDraggableClassName); // додаємо клас щоб створити курсор-лапку
        window.addEventListener('pointermove', this.dragging);
    }

    stopDrag() {
        window.removeEventListener('pointermove', this.dragging);

        this.containerNode.classList.remove(GallaryDraggableClassName); // видаляєм клас щоб припинити дію курсор-лапки

        this.x = -this.currentSlide * (this.width + this.settings.margin); // зробимо перевизначення зміни по "x"
        this.setStylePosition(); // змінимо стиль під змінену позицію
        this.setStyleTransition(); // для плавної заміни слайдів
    }

    dragging(evt) {
        this.dragX = evt.pageX;
        const dragShift = this.dragX - this.clickX;
        const easing = dragShift / 5; // для створення ефекту "важкості" відриву крайніх слайдів від краю
        // Math.min - важкість відриву першого слайду; Math.max - важкість відриву останнього слайду
        this.x = Math.max(Math.min(this.startX + dragShift, easing), this.maximumX + easing ); // при перетягуванні ми додаєм до стартової позиції здвиг

        this.setStylePosition();

        // встановлення повного/цілковитого переходу на наступний слайд а не тільки його частини
        // в одному напрямку:
        if(
            dragShift > 20 && // якщо здвиг не більше 20рх то це хтось ненароком зачіпив
            dragShift > 0 && // якщо робимо таки здвиг
            !this.currentSlideWasChanged && // щоби цей здвиг(умова currentSlide > 0) не застосовувати безкінечно
            this.currentSlide > 0 // якщо змінюємо поточний слайд
        ) { 
            this.currentSlideWasChanged = true; // умова коли змінюємо поточний слайд
            this.currentSlide = this.currentSlide - 1; // віднімаємо один слайд
        }
        // і в зворотному напрямку:
        if(dragShift < -20 && dragShift < 0 && !this.currentSlideWasChanged && this.currentSlide < this.size - 1) {
            this.currentSlideWasChanged = true; // умова коли змінюємо поточний слайд
            this.currentSlide = this.currentSlide + 1; // додаємо один слайд
        }
    }

    setStylePosition() {
        this.lineNode.style.transform = `translate3d(${this.x}px, 0, 0)`;
    }

    setStyleTransition() { // для плавної заміни слайдів при відпусканні кнопки
        this.lineNode.style.transition = `all 0.25s ease 0s`;
    }

    resetStyleTransition() { // для плавної заміни слайдів на початку
        this.lineNode.style.transition = `all 0s ease 0s`;
    };
}

// Helpers:

// функція створення обгортки
function wrapElementByDiv({element, className}) {
    const wrapperNode = document.createElement('div'); // створюємо новий елемент "div"
    wrapperNode.classList.add(className); // задаємо цьому елементу клас

    // створюємо безпосередню обгортку
    element.parentNode.insertBefore(wrapperNode, element); // визначаємо місце вставки
    wrapperNode.appendChild(element); // додаємо обгортку

    return wrapperNode; // отримуємо елемент
}

// функція для виклику іншої функції з проміжком часу
function debounce(func, time=100) {
    let timer;
    return function(event) {
        clearTimeout(timer);
        timer = setTimeout(func, time, event);
    }
}
