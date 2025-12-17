import axios from 'axios';

const getProducts = async () => {
   
    try{
        const response = await axios.get(' https://dummyjson.com/products');
        if(response.status !== 200){
            throw 'error';
        } else{
            console.log('API Response:', response.data.products);
            return response;
        }
    } catch (error) {
        console.error('Error fetching products:', error);
    } finally{
        console.log('Products fetched successfully');
    }
}



const getProductById = async (id) => {
    try{
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        if(response.status !== 200){
            throw 'error';
        } else{
            console.log('API Response:', response.data);
            return response.data;
        }
    } catch (error) {
        console.error('Error fetching product by id:', error);
    }
}


export  { getProducts, getProductById }; 