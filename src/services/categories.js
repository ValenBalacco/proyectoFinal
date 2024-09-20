export const renderCategories = () => {
    //tomamos elementos de la lista
    const ulList = document.getElementById("listFilter");

    //creamos esos elementos dentro de la lista
    ulList.innerHTML = `
        <li id="Todo">Todos los productos</li>
        <li id="Hamburguesas">Hamburguesas</li>
        <li id="Papas">Papas</li>
        <li id="Gaseosas">Gaseosas</li>
        <li id="mayorPrecio">Mayor precio</li>
        <li id="menorPrecio">Menor precio</li>
    `;

    //añadimos dinámicamente el evento click
    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((liElement) => {
        liElement.addEventListener("click", () => {
            handleClick(liElement, liElements); 
        });
    });
};

//verificamos y manejamos el estilo del elemento activo
const handleClick = (elemento, liElements) => { 
    liElements.forEach((el) => {
        if (el.classList.contains("liActive")) {
            el.classList.remove("liActive");
        } 
        if (elemento === el) {
            el.classList.add("liActive");
        }
    });
};
