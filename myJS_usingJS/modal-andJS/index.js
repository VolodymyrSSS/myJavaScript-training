const fruits = [
  {
    id: 1,
    title: 'apples',
    price: 20,
    img: 'https://gd.eppo.int/media/data/taxon/P/PHYPMA/pics/1024x0/1208.jpg',
  },
  {
    id: 2,
    title: 'oranges',
    price: 30,
    img: 'https://3sixtyfiveblog.files.wordpress.com/2017/11/orange-1995079_1920.jpg?w=1498',
  },
  {
    id: 3,
    title: 'mangoes',
    price: 40,
    img: 'https://cdn.shopify.com/s/files/1/0062/6022/8185/files/Mango_Tree_2_480x480.jpg?v=1614356479',
  },
];

/* ------ More classical way to create modal window ------- */

// const modal = $.modal({
//   title: "Volodymyr's Modal",
//   closable: true,
//   content: `<h4>This Modal is shown and is working!</h4>
//     <p>Lorem ipsum dolor sit amet.</p>`,
//   width: '400px',
//   footerButtons: [
//     {
//       text: 'Ok',
//       color: 'primary',
//       handler() {
//         console.log('Btn OK was clicked');
//         modal.close();
//       },
//     },
//     {
//       text: 'Cancel',
//       color: 'danger',
//       handler() {
//         console.log('Btn Cancel was clicked');
//         modal.close();
//       },
//     },
//   ],
// });

/* ------ Dynamical way to create modal window ------- */

const toHTML = (fruit) => `
  <div class="col">
    <div class="card">
      <img
        class="card-img-top"
        style="height:200px;"
        src="${fruit.img}"
        alt="${fruit.title}"
      />
      <div class="card-body">
        <h5 class="card-title">${fruit.title}</h5>
        <a href="#" class="btn btn-primary">find a Price</a>
        <a href="#" class="btn btn-danger">decline fruit</a>
      </div>
    </div>
  </div>`;

function render() {
  const html = fruits.map((fruit) => toHTML(fruit)).join('');
  document.querySelector('#fruits').innerHTML = html;
}

render();

const modal = $.modal({ title: "Volodymyr's Modal" });
