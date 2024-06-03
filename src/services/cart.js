// quais ações meu carrinho pode fazer 

// CASOS DE USO
//  - adicionar item
async function addItem(userCart, item) {
    userCart.push(item);
}

//  - deletar item
 async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1) {
        userCart.splice(index, 1);
    }
 }

//  - remover item 
 async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    if(indexFound == -1) {
        console.log('item não encontrado');
        return
    }

    if(userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    if(userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }
 }

 async function displaycart(userCart) {
    console.log('Shopee cart list: ');
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} | 
        Subtotal ${item.subtotal()}`);
    });
 }

//  - calcular valor total 
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`\nTotal: R$ ${result}`);
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displaycart,
}