export default function createAbout(){
    const about = document.createElement("div");
    const title = document.createElement("h1");
    title.textContent = "THIS IS THE ABOUT PAGE";

    about.append(title);

    return about;
}