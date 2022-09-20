import './App.css';
import {Component} from 'react';
import { Pesquisa } from './Components/Pessquisa';
import {Lista} from './Components/Lista';
import {Cabecalho} from './Components/Cabecalho';
import {Rodape} from './Components/Rodape';
                                                    
class App extends Component{

  state = {

    busca: '',odas: []
  }

  componentDidMount(){

      this.carregaODAs();
  }

  carregaODAs(){

    const {busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(Response=> Response.json())
    .then(odas => this.setState({odas}))
  }

  
  buscaODA = (evento) => {

    this.setState({busca: evento.target.value});
    this.carregaODAs()
  }




  render(){


    const{busca, odas} = this.state;

    return (


      <section className='container'>


      <Cabecalho/>
  
      <div>

        <Pesquisa
          busca={this.state.busca}
          buscaODAS={this.buscaODA}
          quantidadeodas={odas.length}
        />
      </div>

        

        <div className='posts'>

          {odas.map(oda=> (
                <Lista
                  nome = {oda.nome}
                  usuario = {oda.usuario}
                  descricao = {oda.descricao}
                  datainclusao = {oda.data_inclusao}
                  palavraschave= {oda.palavras_chave}    
                  />         
          ))}
        </div>

            <Rodape/>
      </section>
    )
  }
}
export default App;