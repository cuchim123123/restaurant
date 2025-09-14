export default function createMenu(){
    const menu = document.createElement("div");
    const title = document.createElement("h1");
    title.textContent = "THIS IS THE MENU PAGE";

    menu.append(title);

    return menu;
}