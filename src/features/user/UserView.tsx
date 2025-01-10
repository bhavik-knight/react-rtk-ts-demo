import { useEffect } from "react";
import { useAppDispatcher, useAppSelector } from "../../app/hook";
import { fetchUsers } from "./userSlice";

const UserView = () => {
    const { isLoading, data, error } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatcher();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <>
            <h4>List of {data.length} Customers</h4>

            {isLoading && <h6>Fetching users' data...</h6>}
            {!isLoading && error && data.length != 0 && <h6>Error in fetching user data </h6>}

            {!isLoading && !error && (
                <>
                    {data.map((user) => (
                        <p key={user.id}>{user.name}</p>
                    ))}
                </>
            )}
        </>
    );
};

export default UserView;
