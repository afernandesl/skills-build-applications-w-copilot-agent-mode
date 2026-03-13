import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Bootstrap Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Octofit Tracker</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Activities</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Leaderboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Workouts</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Bootstrap Heading */}
      <div className="container mt-4">
        <h1 className="display-4 mb-4">Bem-vindo ao Octofit Tracker</h1>

        {/* Bootstrap Card */}
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Sobre o App</h5>
            <p className="card-text">Este app permite rastrear atividades, equipes, leaderboard e sugestões de treino.</p>
            <a href="https://reactjs.org" className="btn btn-primary">Saiba mais</a>
          </div>
        </div>

        {/* Bootstrap Table */}
        <h2 className="mb-3">Exemplo de Tabela</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Equipe</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Ironman</td>
              <td>Marvel</td>
              <td><button className="btn btn-success btn-sm">Ver</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Batman</td>
              <td>DC</td>
              <td><button className="btn btn-success btn-sm">Ver</button></td>
            </tr>
          </tbody>
        </table>

        {/* Bootstrap Form */}
        <h2 className="mb-3">Exemplo de Formulário</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="inputNome" className="form-label">Nome</label>
            <input type="text" className="form-control" id="inputNome" placeholder="Digite o nome" />
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>

        {/* Bootstrap Modal (exemplo estático) */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal de Exemplo</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                Conteúdo do modal.
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                <button type="button" className="btn btn-primary">Salvar mudanças</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
