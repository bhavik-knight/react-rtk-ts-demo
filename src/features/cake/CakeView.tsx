import { useState } from "react";
import { useAppDispatcher, useAppSelector } from "../../app/hook";
import { ordered as cakeOrdered, restocked as cakeRestocked } from "../cake/cakeSlice";

const CakeView = () => {
    const [orderCount, setOrderCount] = useState(1);
    const [restockCount, setRestockCount] = useState(1);
    const cakeInStock = useAppSelector((state) => state.cake.canOrder);
    const icecreamInStock = useAppSelector((state) => state.icecream.canOrderIcecream);

    const numberOfCake = useAppSelector((state) => state.cake.numberOfCake);
    const dispatch = useAppDispatcher();

    const orderCake = () => {
        dispatch(cakeOrdered(orderCount));
        setOrderCount(1);
    };

    const restockCake = () => {
        dispatch(cakeRestocked(restockCount));
        setRestockCount(1);
    };

    return (
        <>
            {!cakeInStock && <h5>Our of stock: Cakes</h5>}
            {!icecreamInStock && <h5>Out of stock: Icecreams</h5>}
            <h4>Number of Cakes: {numberOfCake}</h4>
            <div>
                <span>
                    <input
                        name="order-cake"
                        value={orderCount}
                        type="number"
                        min={1}
                        onChange={(e) => setOrderCount(parseInt(e.target.value))}
                    />
                    <button
                        name="btn-order-cake"
                        onClick={orderCake}>
                        Order Cake
                    </button>
                </span>
            </div>

            <div>
                <span>
                    <input
                        name="restock-cake"
                        value={restockCount}
                        type="number"
                        min={1}
                        onChange={(e) => setRestockCount(parseInt(e.target.value))}
                    />
                    <button
                        name="btn-restock-cake"
                        onClick={restockCake}>
                        restock Cake
                    </button>
                </span>
            </div>
        </>
    );
};

export default CakeView;
