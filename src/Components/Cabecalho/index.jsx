import  logo  from "./imagens/logobocawebcerto.png";
export const Cabecalho = () => {

    return(
        <div className="cabecalho">
            <img src={logo} alt="logo bocaweb" className="imagemcabecalho" />
            <p>BOCAWEB FRONT</p>
        </div>
    )
}