document.addEventListener('DOMContentLoaded', function () {
    const cartIcon = document.getElementById('cart-icon');
    const sidebar = document.getElementById('cart-sidebar');
    const closeSidebarBtn = document.getElementById('close-sidebar');
    const cartContent = document.getElementById('cart-content');
    let payButton = document.getElementById('pay-btn');

    let cart = [];

    cartIcon.addEventListener('click', function (event) {
        event.preventDefault();
        sidebar.classList.add('open');
        updateCartContent();
    });

    closeSidebarBtn.addEventListener('click', function () {
        sidebar.classList.remove('open');
    });

    document.querySelectorAll('.boton-item').forEach(button => {
        button.addEventListener('click', () => {
            const item = button.closest('.item');
            const title = item.querySelector('.titulo-item').textContent;
            const price = parseFloat(item.querySelector('.precio-item').textContent.replace('$', '').replace('.', ''));

            const cartItem = cart.find(product => product.name === title);

            if (cartItem) {
                cartItem.quantity++;
            } else {
                cart.push({ name: title, price: price, quantity: 1 });
            }

            updateCartContent();
        });
    });

    function updateCartContent() {
        cartContent.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartContent.innerHTML = '<p>Vacío</p>';
        } else {
            cart.forEach((item, index) => {
                total += item.price * item.quantity;

                const itemDiv = document.createElement('div');
                itemDiv.className = 'cart-item';
                itemDiv.innerHTML = `
                    <span>${item.name} - $${item.price.toLocaleString()} - Cantidad: ${item.quantity}</span>
                    <div>
                        <button onclick="changeQuantity(${index}, 1)">+</button>
                        <button onclick="changeQuantity(${index}, -1)">-</button>
                    </div>
                `;
                cartContent.appendChild(itemDiv);
            });
        }

        document.getElementById('cart-total').innerHTML = `
            <p>Total: $${total.toLocaleString()}</p>
            <button class="pay-btn" id="pay-btn">Pagar</button>
        `;

        payButton = document.getElementById('pay-btn');
        payButton.addEventListener('click', function () {
            alert('Gracias por su compra!');
            cart = [];
            updateCartContent();
        });
    }

    window.changeQuantity = function (index, delta) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        updateCartContent();
    };
});
