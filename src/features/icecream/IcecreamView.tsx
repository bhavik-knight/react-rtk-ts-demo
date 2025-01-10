import { useState } from "react";
import { useAppDispatcher, useAppSelector } from "../../app/hook";
import { ordered as icecreamOrdered, restocked as icecreamRestocked } from "../icecream/icecreamSlice";

const IcecreamView = () => {
    const [orderCount, setOrderCount] = useState(1);
    const [restockCount, setRestockCount] = useState(1);

    const numberOfIcecream = useAppSelector((state) => state.icecream.numberOfIcecream);
    const dispatch = useAppDispatcher();

    const orderIcecream = () => {
        dispatch(icecreamOrdered(orderCount));
        setOrderCount(1);
    };

    const restockIcecream = () => {
        dispatch(icecreamRestocked(restockCount));
        setRestockCount(1);
    };
    return (
        <>
            <h4>Number of Icecreams: {numberOfIcecream}</h4>

            <div>
                <span>
                    <input
                        name="order-icecream"
                        value={orderCount}
                        type="number"
                        min={1}
                        onChange={(e) => setOrderCount(parseInt(e.target.value))}
                    />
                    <button
                        name="btn-order-icecream"
                        onClick={orderIcecream}>
                        Order Icecream
                    </button>
                </span>
            </div>

            <div>
                <span>
                    <input
                        name="restock-icecream"
                        value={restockCount}
                        type="number"
                        min={1}
                        onChange={(e) => setRestockCount(parseInt(e.target.value))}
                    />
                    <button
                        name="btn-restock-icecream"
                        onClick={restockIcecream}>
                        Restock Icecream
                    </button>
                </span>
            </div>
        </>
    );
};

export default IcecreamView;
