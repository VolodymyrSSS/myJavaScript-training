const GalleryClassName = 'gallery'; // задаємо клас для контейнера всієї галереї
const GalleryLineClassName = 'gallery-line'; // задаємо клас для лінії(серії) слайдів
const GallerySlideClassName = 'gallery-slide'; // задаємо клас для самого слайда

// створюємо html-галерею через "Class" для можжливості додавання інших галерей
class Gallery {
    // передаємо в конструктор - основний створюваний елемент-обгортку та параметр для опцій (по замовчуванню -пустий обєкт)
    constructor(element, options={}) {
        this.containerNode = element;  // визначаємо перший основний параметр куда передаємо основний елемент-обгортку
        this.size = element.childElementCount;  // задаємо властивість розміру - кількість слайдів в галереї
        this.currentSlide = 0; // визначаємо слайд, який буде активний при запуску галереї - від початку

        this.manageHTML =  this.manageHTML.bind(this); // прив'язуємо контекст для конструктора при виклику методу створ слайдів
        this.setParameters =  this.setParameters.bind(this); // прив'язуємо контекст для конструктора при виклику методу задання параметрів
        this.manageHTML();  // викликаємо метод створення слайдів (елементи-обгортки)
        this.setParameters(); // викликаємо метод для задання параметрів: ширини лінії слайдів та ширини самого слайда
    }

    // визначаємо склад основного елемента-обгортки
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

    setParameters() {
        // задаємо ширину самої контейнер-gallery
        const coordsContainer = this.containerNode.getBoundingClientRect(); // отримуємо усі координати контейнер-gallery
        this.width = coordsContainer.width; // беремо тільки ширину контейнер-gallery

        // задаємо ширину лінії слайдів: кількість слайдів (this.size) * ширину слайда (this.width)
        this.lineNode.style.width = `${this.size * this.width}px`;

        /* задаємо ширину самого слайда: пробігаємось по кожному слайду методом forEach, перед цим перетворивши slideNodes в масив, та присвоюємо велечину ширини слайда: */
        Array.from(this.slideNodes).forEach(slideNode => {
            slideNode.style.width = `${this.width}px`
        });
    }
}

// Helpers
function wrapElementByDiv({element, className}) {
    const wrapperNode = document.createElement('div'); // створюємо новий елемент "div"
    wrapperNode.classList.add(className); // задаємо цьому елементу клас

    // створюємо безпосередню обгортку
    element.parentNode.insertBefore(wrapperNode, element); // визначаємо місце вставки
    wrapperNode.appendChild(element); // додаємо обгортку

    return wrapperNode; // отримуємо елемент
}
