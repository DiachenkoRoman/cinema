import HallPlaces from "./HallPlaces";
import "../styles/MainView.scss"

class MainView {

    render () {
        const HallSchemePlaces = new HallPlaces();

       const main = document.createElement("div");
       main.classList.add("main");

       const mainTitle = document.createElement("h1");
       mainTitle.classList.add("main__title");
       mainTitle.textContent = "Watch the cinema!";

       main.append(mainTitle, HallSchemePlaces.render());

       return main
    }
}


export default MainView
