export const Products = async () => {
    try {
        const response = await fetch(`${global.config.apiUrl}product`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        throw new Error(`Error fetching products data: ${error.message}`);
    }
};