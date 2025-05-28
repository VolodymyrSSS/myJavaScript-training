function cloneDeep(obj) {
  let newObj = {};

  for (let key in obj) {
    // перевірка чи властивість не є об’єктом чи null
    if (typeof obj[key] !== 'object' || obj[key] == null) {
      newObj[key] = obj[key]; // просто копіюємо властивість
    } else if (Array.isArray(obj[key])) { // якщо властивість є масив то їх треба перевіряти окремо
      // масиви клонуються за допомогою .map(), щоб також забезпечити рекурсивне глибоке клонування
      newObj[key] = obj[key].map(element => {
        return typeof element === 'object' && element !== null ? cloneDeep(element) : element;
      });
    } else {
      newObj[key] = cloneDeep(obj[key]); // рекурсивне клонування вкладених об’єктів
    }
  }
    
  return newObj;
}

let worker = { // об’єкт для клонування
  name: 'Modest',
  surname: 'Opakhan',
  age: 42,
  job: {
    speciality: 'frontend',
    skils: ['HTML5', 'CSS3', 'JavaScript', 'React', 'PostreSQL', 'NodeJS'],
    'in Orange team': true,
  },
  'company friends': null,
  statuses: {
    inWork: {
      isAdmin: false,
      isBuisinessAnalitic: false,
      isDeveloper: true,
      isDesigner: false,
      isQA: false,
      passID: 452744879924484,
      annualWage: 120_000,
    },
    inLife: {
      isMaried: false,
      isSingle: false,
      isDivorse: true,
      children: {
        sons: [
          {name: 'Tarry', birthday: '01/09/2000'},
        ],
        daughters: [
          {name: 'Ellis', birthday: '14/07/2017'},
          {name: 'Caroll', birthday: '04/06/2023'}
        ],
      },
      hobbies: ['oil painting', 'arrow hunting'],
    }
  }
};

// використання

let clonedWorker = cloneDeep(worker); // повне глибоке клонування об’єкту worker

console.log( clonedWorker );

document.getElementById("obj-copied").innerText = JSON.stringify(clonedWorker, null, 4);
