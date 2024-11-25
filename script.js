// Adiciona máscaras para os campos CPF e CEP
if (typeof Inputmask !== 'undefined') {
    // Máscara para CPF
    Inputmask("999.999.999-99").mask("#cpf");

    // Máscara para CEP
    Inputmask("99999-999").mask("#postal_code");
} else {
    // console.error('Biblioteca Inputmask não encontrada. Verifique se foi incluída corretamente.');
}

// Configuração inicial do Modal do Carrinho
const cartButton = document.getElementById('cartButton');
const cartModal = document.getElementById('cartModal');
const closeCartButton = document.getElementById('closeCartButton');
let cart = []; 

// Carrega itens do carrinho ao iniciar
document.addEventListener('DOMContentLoaded', loadCart);

// Abri o modal do carrinho ao clicar no botão
if (cartButton) {
    cartButton.addEventListener('click', function () {
        cartModal.style.display = 'flex';
        updateCartDisplay(); 
    });
}

// Fecha o modal do carrinho ao clicar no botão de fechar
if (closeCartButton) {
    closeCartButton.addEventListener('click', function () {
        cartModal.style.display = 'none';
    });
}

// Fecha o modal do carrinho ao clicar fora dele
window.addEventListener('click', function (event) {
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

// Seleciona o botão "Meus Pedidos" pelo ID 'ordersButton'
const ordersButton = document.getElementById('ordersButton');
if (ordersButton) {
    ordersButton.addEventListener('click', () => {
        window.location.href = 'orders.php'; 
    });
}

// Adiciona um item ao carrinho
function addToCart(productId) {
    fetch('add_to_cart.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_id: productId }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                console.log('Item adicionado ao carrinho:', data);
                cart.push(data.item); 
                updateCartQuantity();
                updateCartDisplay();
            } else {
                alert('Erro ao adicionar item ao carrinho.');
            }
        })
        .catch(error => console.error('Erro ao adicionar item ao carrinho:', error));
}

// Remove um item do carrinho
function removeFromCart(cartItemId) {
    fetch('remove_from_cart.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: cartItemId }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                console.log('Item removido com sucesso!');
                updateCartDisplay(); 
                updateCartQuantity(); 
            } else {
                console.error('Erro ao remover item do carrinho:', data.message);
            }
        })
        .catch(error => console.error('Erro ao processar a solicitação:', error));
}

// Atualiza a exibição dos itens no carrinho
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartTotalElement = document.getElementById('cartTotal');
    cartItemsContainer.innerHTML = ''; 
    let total = 0;

    // Carrega itens do carrinho do banco de dados
    fetch('load_cart.php')
        .then(response => response.json())
        .then(data => {
            if (data.success && data.items.length > 0) {
                data.items.forEach(item => {
                    const itemElement = document.createElement('div');
                    itemElement.className = 'cart-item mb-2';
                    itemElement.innerHTML = `
                        ${item.name} - R$${item.price.toFixed(2)} x ${item.quantity}
                        <button class="btn btn-danger btn-sm ms-2" onclick="removeFromCart(${item.id})">Remover</button>
                    `;
                    cartItemsContainer.appendChild(itemElement);
                    total += item.price * item.quantity; 
                });
            } else {
                cartItemsContainer.innerHTML = '<p>O carrinho está vazio.</p>';
            }
            cartTotalElement.textContent = `R$${total.toFixed(2)}`; 
        })
        .catch(error => console.error('Erro ao carregar itens do carrinho:', error));
}

// Atualiza o numero de itens no badge do carrinho
function updateCartQuantity() {
    fetch('load_cart.php')
        .then(response => response.json())
        .then(data => {
            const cartQuantityBadge = document.getElementById('cartQuantityBadge');
            if (data.success && data.items.length > 0) {
                const totalItems = data.items.reduce((sum, item) => sum + item.quantity, 0); 
                cartQuantityBadge.textContent = totalItems;
                cartQuantityBadge.style.display = 'inline'; 
            } else {
                cartQuantityBadge.textContent = '0';
                cartQuantityBadge.style.display = 'none'; 
            }
        })
        .catch(error => console.error('Erro ao atualizar badge do carrinho:', error));
}

// Carrega os itens do carrinho do banco de dados
function loadCart() {
    const cartButton = document.getElementById('cartButton'); 
    if (cartButton) {
        fetch('load_cart.php')
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    cart = data.items; 
                    updateCartQuantity(); 
                } else {
                    console.warn('Nenhum item no carrinho ou erro ao carregar:', data.message);
                }
            })
            .catch(error => console.error('Erro ao carregar itens do carrinho:', error));
    } 
}


// Finaliza o pedido
const finalizeOrderButton = document.getElementById('finalizeOrderButton');
if (finalizeOrderButton) {
    finalizeOrderButton.addEventListener('click', () => {
        fetch('load_cart.php')
            .then(response => response.json())
            .then(data => {
                if (data.success && data.items.length > 0) {
                    window.location.href = 'payment.php';
                } else {
                    alert('O carrinho está vazio. Adicione produtos ao carrinho para continuar.');
                }
            })
            .catch(error => console.error('Erro ao verificar o carrinho:', error));
    });
}

// Logout
const logoutButton = document.getElementById('logoutButton');
if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        window.location.href = 'logout.php';
    });
}

