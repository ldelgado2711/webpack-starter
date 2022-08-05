import "../css/components.css";
import webpacklogo from "../assets/img/webpack-logo.png";

const saludar = (nombre) => {
    console.log("creando etiqueta h1");
    const h1 = document.createElement("h1");
    h1.innerHTML = `Hola ${nombre} -- !!`;
    document.body.append(h1);

    // Img
    console.log(webpacklogo);
    const img = document.createElement("img");
    img.src = webpacklogo;
    document.body.append(img);
};
export default saludar;