export const getProducts = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/products");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const deleteProduct = async (id : number) => {
  try {
    const response = await fetch("http://localhost:3000/api/products", {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete product');
    }

    console.log('Product deleted successfully');
  } catch (error) {
    console.error('Error deleting product:', error);
  }
};