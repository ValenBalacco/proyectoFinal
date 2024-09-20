// Función para obtener productos del Local Storage
export const handleGetProductLocalStorage = () => {
    // Obtener los productos del Local Storage y parsearlos como JSON
    const products = JSON.parse(localStorage.getItem("products"));
  
    // Si hay productos, retornarlos, si no, retornar un arreglo vacío
    if (products) {
      return products;
    } else {
      return [];
    }
  };
  
  // Función para guardar un producto en el Local Storage
  export const setInLocalStorage = (productIn) => {
    // Obtener los productos existentes en el Local Storage
    let productsInLocal = handleGetProductLocalStorage();
  
    // Encontrar el índice del producto si ya existe
    const existingIndex = productsInLocal.findIndex(
      (productLocal) => productLocal.id === productIn.id
    );
  
    // Si el producto existe, reemplazarlo
    if (existingIndex !== -1) {
      productsInLocal[existingIndex] = productIn;
    } else {
      // Si no existe, agregarlo al arreglo
      productsInLocal.push(productIn);
    }
  
    // Guardar el arreglo actualizado en el Local Storage
    localStorage.setItem("products", JSON.stringify(productsInLocal));
  };