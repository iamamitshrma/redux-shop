import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";


const ProductListing = () => {

    const dispatch = useDispatch();

    const fetchProducts = async () => {
        try{
            const response = await axios.get('https://fakestoreapi.com/products');
            dispatch(setProducts(response.data))
        } catch(err) {
            console.log(err.message);
        }
    }

    useEffect(() =>{
        fetchProducts();
    }, [])
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
};

export default ProductListing;