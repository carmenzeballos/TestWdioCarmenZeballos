/**************TEST 1 ***********/

/* describe('OpenCart', () => {

    it('Debería buscar iPhone', async () => {

      browser.url('/');
    });
 }); */


 /**************TEST 2 ***********/
//  describe('OpenCart', () => {
//   it('Debería buscar iPhone', async () => {
//     await browser.url('/');
//     const logo = await $('#logo');
//   });
// });

/**************TEST 3 ***********/
/* describe('Carrito', () => {
  it('Debería buscar iphone', async () => {
    await browser.url('/');
    const barraDeBusqueda = await $('[name="search"]');
    await barraDeBusqueda.setValue('iphone');
    await barraDeBusqueda.keys('Enter');
    await browser.pause(5000);
  });
}); */

/**************TEST 4 ***********/
/* describe('Carrito', () => {
  it('Debería buscar apple cinema y seleccionar el segundo color', async () => {
      await browser.url('/');
      const barraDeBusqueda = await $('[name="search"]');  //busca el elemento con el atributo name="search" y lo asigna a la variable barraDeBusqueda
      await barraDeBusqueda.setValue('apple cinema');  //escribe el texto en la barra de búsqueda
      await barraDeBusqueda.keys('Enter');
      await browser.pause(5000);
      
      const articulo = await $('//div[@class="caption"]//a[1]'); //busca el elemento  y lo asigna a la variable articulo
      await articulo.click(); //hace click en el elemento
      await browser.pause(5000);


      const selectColor = await $('#input-option217'); //busca el elemento con el id input-option217 y lo asigna a la variable selectColor
      const value = await selectColor.getValue(); //obtiene el valor del color seleccionado
      console.log(value); //imprime el valor del color seleccionado
      await selectColor.selectByAttribute('value', '3'); //selecciona el color del producto por el atributo value y el valor 3
      await browser.pause(5000);
      console.log(await selectColor.getValue());  //imprime el valor del color seleccionado

      //validar que el color seleccionado sea el correcto
      expect(await selectColor.getValue()).to.equal('3');


  });

}); */


/**************TEST 5 ***********/
it('Deberia ocultar barra de búsqueda', async () => {
  await browser.url('/');
  const barraBusquedaSelector = '[name="search"]';
  await browser.execute((selector) => {
    document.querySelector(selector).style.display = 'none';
  },  barraBusquedaSelector);
  await browser.debug();
});