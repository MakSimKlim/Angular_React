import logo from '../logo.svg'; // Добавлен импорт картинки файла logo.svg из директории src
                                // поэтому 2 точки ..

function Header()
{
    return(
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello React</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
    </header>
    );

}

export default Header; 