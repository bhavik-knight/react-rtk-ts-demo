import "./App.css";
import CakeView from "./features/cake/CakeView";
import IcecreamView from "./features/icecream/IcecreamView";
import UserView from "./features/user/UserView";

function App() {
    return (
        <>
            <h2>Welcome to BK Cake Shop!</h2>
            <em>We have a special offer running for the winters...</em>
            <br />
            <strong>1 Icecream free</strong> on each order of cakes
            <CakeView />
            <IcecreamView />
            <UserView />
        </>
    );
}

export default App;
