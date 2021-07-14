import "./App.css";
import { quotesArray } from "./store/quotes";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div id="quote-box">
          <p id="text">
            <i class="fa fa-quote-left" aria-hidden="true"></i> Edit{" "}
            <code>src/App.js</code> and save to reload.
          </p>
          <p id="author">- {}</p>
          <div id="clickables">
            <div id="share-links">
              <a
                id="tweet-quote"
                className="App-link"
                href="https://twitter.com/intent/tweet"
                target="_blank"
                rel="noopener noreferrer"
                title="Tweet this quote!"
              >
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a
                id="tumblr-quote"
                className="App-link"
                href="https://https://www.tumblr.com/widgets/share/tool"
                target="_blank"
                rel="noopener noreferrer"
                title="Post this quote on tumblr!"
              >
                <i class="fa fa-tumblr" aria-hidden="true"></i>
              </a>
            </div>
            <button id="new-quote">New Quote</button>
          </div>
        </div>
        <span id="developer">by mikeattah</span>
      </div>
    </div>
  );
}

export default App;
