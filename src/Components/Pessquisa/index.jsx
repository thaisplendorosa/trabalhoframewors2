export const Pesquisa = ({busca, buscaODAS, quantidadeodas}) => {

    return(
        <div className="barrapesquisa">
          <input
          name='busca'
          type='text'
          value={busca}
          placeholder='o que deseja buscar'
          onChange={buscaODAS}
          className='buscainput'
          />
          <p className="qteodas"> {quantidadeodas} odas </p>

        </div>
    )
}