import { useState } from "react";
import { useAppDispatcher, useAppSelector } from "../../app/hook";
import { ordered as cakeOrdered, restocked as cakeRestocked } from "../cake/cakeSlice";

const CakeView = () => {
    const [orderCount, setOrderCount] = useState(1);
    const [restockCount, setRestockCount] = useState(1);

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
