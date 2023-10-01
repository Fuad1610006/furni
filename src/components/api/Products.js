const BASE_URL = 'http://localhost/Furni/';

export const Products = async () => {
    try {
        const response = await fetch(`${BASE_URL}/product.php`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error fetching products data: ${error.message}`);
    }
};