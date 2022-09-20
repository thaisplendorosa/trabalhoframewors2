import  logoif  from "./imagens/logoif.png";
export const Rodape = () => {

    return(
        <div className="rodape">
            <h1>Trabalho de Frameworks</h1>
            <div className='nomealunos'>
                <p>Alunas: Thais Campos, Ingrid Dandara</p>
            </div>
            <img src={logoif} alt="logo bocaweb" className="imagemcabecalho" />
        </div>
    )
}