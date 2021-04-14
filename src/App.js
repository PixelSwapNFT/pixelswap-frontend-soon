import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-container">
          <p>
            Hi my name is Pixel
        </p>
          <p>
            I am a gamificational  decentralized exchanger and yield-farmer with a built-in NFT system, endowed with the ability to collect unique token cards of game projects that provide not only the aesthetic pleasure of owning them, but also practical use.
        </p>

        </div>
        <div>
          <a
            className="App-link"
            href="https://twitter.com/Pixelswapcoin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            className="App-link"
            href="https://t.me/pixelswapofficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
          <a
            className="App-link"
            href="mailto:pr@pixelswapcoin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            pr@pixelswapcoin.com
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
