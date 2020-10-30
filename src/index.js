import MainView from "./components/MainView";

const MainContainer = new MainView();
const root = document.getElementById("root");

window.addEventListener("DOMContentLoaded", function () {
    root.append(MainContainer.render())
})
