import Order from '../Order';
import Beer from '../Beer';
import Whisky from '../Whisky';
import Water from '../Water';
import MessageDataFile from '../MessageDataFile';

test('Deve criar um pedido e calcular o total', function () {
    const order = new Order(new MessageDataFile);
    order.addItem(new Beer('Brahma', 10));
    order.addItem(new Whisky(' Jack Daniels', 100));
    order.addItem(new Water('Fonte Ijuí', 2));
    const total = order.getTotal();
    expect(total).toBe(112);
});

test('Deve criar um pedido e calcular os impostos', function () {
    const order = new Order(new MessageDataFile);
    order.addItem(new Beer('Brahma', 10));
    order.addItem(new Whisky(' Jack Daniels', 100));
    order.addItem(new Water('Fonte Ijuí', 2));
    const taxes = order.getTaxes();
    expect(taxes).toBe(21);
});

test('Deve criar um pedido e imprimir uma mensagem em pt-br', async function () {
    const order = new Order(new MessageDataFile);
    order.addItem(new Beer('Brahma', 10));
    order.addItem(new Whisky(' Jack Daniels', 100));
    order.addItem(new Water('Fonte Ijuí', 2));
    const message = await order.printMessage('pt-br');
    expect(message).toBe(
        'O total foi de R$ 112, os impostos foram R$ 21. Obrigado pelo seu pedido!'
    );
});

test('Deve criar um pedido e imprimir uma mensagem em en-us', async function () {
    const order = new Order(new MessageDataFile);
    order.addItem(new Beer('Brahma', 10));
    order.addItem(new Whisky(' Jack Daniels', 100));
    order.addItem(new Water('Fonte Ijuí', 2));
    const message = await order.printMessage('en-us');
    expect(message).toBe(
        'The total was R$ 112, the taxes was R$ 21. Thanks for your order!'
    );
});
