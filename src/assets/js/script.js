

// Function to fetch data and render products
async function fetchAndRenderProducts() {
    try {
      const response = await fetch('../../data.json'); // Replace 'products.json' with your JSON file path
      const data = await response.json();
  
      const producList = document.querySelector('#product-list');
  
      data.forEach(product => {
        const productDiv = createProductElement(product);
        producList.appendChild(productDiv);
      });
    } catch (error) {
      console.error('Error fetching or rendering products:', error);
    }
  }
  
  // Function to create product elements
  function createProductElement(product) {
    const productDiv = document.createElement('div');

    productDiv.setAttribute("draggable", true);

    productDiv.classList.add('product');
  
    const productName = document.createElement('h4');
    productName.textContent = product.name;
  
    const productQuantity = document.createElement('p');
    productQuantity.textContent = `Quantity: ${product.quantity} ${product.measure}`;
  
    const productValue = document.createElement('small');
    productValue.textContent = `Value: R$${product.value.toFixed(2)}`;
  
    // Append elements to productDiv
    productDiv.appendChild(productName);
    productDiv.appendChild(productQuantity);
    productDiv.appendChild(productValue);
  
    return productDiv;
  }
  
  // Call the fetchAndRenderProducts function to fetch and render products
  fetchAndRenderProducts();
  

// Modal

const handleProductDialog = () => {

  const modalTrigger = document.querySelector('#product-add');
  const productDialog = document.querySelector('#product-add-dialog');
  const closeModal = document.querySelector('#close-modal');
  const registerForm = document.querySelector('#register-form')
  
  modalTrigger.addEventListener('click', () => {
    productDialog.showModal()
  })

  closeModal.addEventListener('click', () => {
    productDialog.close()
  })

  registerForm.addEventListener('submit', () => {

    productDialog.close()
  })

}

handleProductDialog();