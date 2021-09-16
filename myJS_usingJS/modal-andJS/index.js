// const fruits = [
//   { id: 1, title: apples, price: 20 },
//   { id: 2, title: oranges, price: 30 },
//   { id: 3, title: mangoes, price: 40 },
// ];

const modal = $.modal({
  title: "Volodymyr's Modal",
  closable: true,
  content: `<h4>This Modal is shown and is working!</h4>
    <p>Lorem ipsum dolor sit amet.</p>`,
  width: '400px',
  footerButtons: [
    {
      text: 'Ok',
      color: 'primary',
      handler() {
        console.log('Btn OK was clicked');
        modal.close();
      },
    },
    {
      text: 'Cancel',
      color: 'danger',
      handler() {
        console.log('Btn Cancel was clicked');
        modal.close();
      },
    },
  ],
});
