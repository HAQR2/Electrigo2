//alerts

//this ok

 function alertaInicial() {
    swal({
        title: "URGENCIAS",
        text: "comunicate al 11 26194198",
        icon: "warning",
});
}

//this to mod
function envioExitoso() {
    swal({
        title: "Excelente",
        text: "Mensaje Enviado",
        icon: "success",
    });


    function alertCorrect(){
        document.getElementById("enviar").addEventListener("click", function(){
            
            envioExitoso()
    
        })
    }    

//this no necesari
function faltandatos(){
    swal({
        title: 'DATOS ERRONEOS',
        Text: 'Esta ingresando datos erroneos o dejando casilleros vacios',
        icon: 'error'
    })
}
alertaInicial()

}


/*
function validarFormulario(){
    let nombre = document.getElementById('nombre').value
    let correo = document.getElementById('correo').value
    let mensaje = document.getElementById('mensaje').value



    if (mensaje =='' || correo ==''|| nombre ==''){
        return faltandatos()
    }else{
        return envioExitoso()
    }

}

*/

function alertCorrect(){
    document.getElementById("enviar").addEventListener("click", function(){
        
        envioExitoso()

    })
}
  // Obtener los valores de los campos



alertaInicial()


function statusFormulario(){
    fetch("http://127.0.0.1:5000/solicitud_contacto/")

    .then(res => {
        if (res.status == 200){
            envioExitoso()
        }else{
            alertaInicial()
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const updateLocalStorage = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    const renderCart = () => {
        const cartItemsContainer = document.getElementById('cart-items');
        const cartCount = document.getElementById('cart-count');
        cartItemsContainer.innerHTML = '';
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.classList.add('delete-item');
            deleteButton.addEventListener('click', () => {
                cart.splice(index, 1);
                updateLocalStorage();
                renderCart();
            });

            li.appendChild(deleteButton);
            cartItemsContainer.appendChild(li);
        });
        cartCount.textContent = cart.length;
    };

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const servicio = button.getAttribute('data-servicio');
            cart.push(servicio);
            updateLocalStorage();
            renderCart();
            alert(`${servicio} ha sido agregado al carrito.`);
        });
    });

    // Renderiza el carrito al cargar la página
    renderCart();

    // Maneja el estado desplegable del carrito con animación
    document.getElementById('cart-link').addEventListener('mouseover', (event) => {
        event.preventDefault();
        const cartItems = document.getElementById('cart-items');
        cartItems.classList.add('show');
    });

    document.getElementById('cart-link').addEventListener('mouseout', (event) => {
        event.preventDefault();
        const cartItems = document.getElementById('cart-items');
        cartItems.classList.remove('show');
    });

    // Cierra el carrito si se hace clic fuera de él
    window.onclick = (event) => {
        if (!event.target.matches('#cart-link') && !event.target.matches('#cart-container h2')) {
            const dropdowns = document.getElementsByClassName('dropdown-content');
            for (let i = 0; i < dropdowns.length; i++) {
                const openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    };
});
