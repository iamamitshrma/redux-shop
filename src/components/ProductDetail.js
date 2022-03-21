import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, removeSelectedProduct } from "../redux/actions/productActions";


const ProductDetail = () => {

    const product = useSelector((state) => state.product);
    const {image, title, price, category, description} = product;

    const { productId } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        if(productId && productId !== "") dispatch(fetchProduct(productId))

        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [dispatch, productId]);

    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ): (
                <div className="ui placeholder segment">
                <div className="ui two column stackable center aligned grid">
                    <div className="ui vertical divider">AND</div>
                    <div className="middle aligned row">
                        <div className="column lp">
                            <img src={image} alt="is here" className="ui fluid image" />
                        </div>
                        <div className="column rp">
                            <h1>{title}</h1>
                            <h2>
                                <h2 className="ui teal tag label">$ {price}</h2>
                            </h2>
                            <h3 className="ui brown block header">{category}</h3>
                            <p>{description}</p>
                            <div className="ui vertical animated button" tabIndex="0">
                                <div className="hidden content">
                                    <i className="shop icon"></i>
                                </div>
                                <div className="visible content">Add to Cart</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}

        </div>
    )
};

export default ProductDetail;