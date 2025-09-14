export default function createHome(){
    const home = document.createElement("div");
    const title = document.createElement("h1");
    title.textContent = "THIS IS THE HOME PAGE";

    home.append(title);

    return home;
}