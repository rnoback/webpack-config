import Recipes from "./Recipes";
import wear from "../images/wealgowear.jpg";
import world from "../images/worldLow.svg";
import Whatever from "./Whatever";

const App = () => {
    return (
        <div>
            <section className="hero">

            </section>
            <main>
                <section>
                    <h1>Oh hai React</h1>
                </section>
                <img src={wear} alt={wear} width="250" />
                <img src={world} alt={world} height="250" width="450" />
            </main>
            <Recipes />
            <Whatever />
        </div>
    )
}

export default App;