import React from "react";
import "./App.css";
import { quotesArray } from "./assets/quotes";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.initialQuote = Math.floor(Math.random() * quotesArray.length);
    this.initialColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    this.state = {
      quote: quotesArray[this.initialQuote].quote,
      author: quotesArray[this.initialQuote].author,
      color: this.initialColor,
      bgColor: this.initialColor,
      twitter: this.handleTweetLink(
        quotesArray[this.initialQuote].quote,
        quotesArray[this.initialQuote].author
      ),
      tumblr: this.handleTumblrLink(
        quotesArray[this.initialQuote].author,
        quotesArray[this.initialQuote].quote
      ),
    };

    this.handleTweetLink = this.handleTweetLink.bind(this);
    this.handleTumblrLink = this.handleTumblrLink.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleTweetLink(quote, author) {
    return (
      "https://twitter.com/intent/tweet" +
      "?hashtags=quotes&related=mikeattah_&text=" +
      quote +
      " -" +
      author
    );
  }
  handleTumblrLink(author, quote) {
    return (
      "https://www.tumblr.com/widgets/share/tool" +
      "?posttype=quote&tags=quotes,freeCodeCamp&caption=" +
      author +
      "&content=" +
      quote
    );
  }
  handleButtonClick() {
    const randomQuote = Math.floor(Math.random() * quotesArray.length);
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    this.setState({
      quote: quotesArray[randomQuote].quote,
      author: quotesArray[randomQuote].author,
      color: randomColor,
      bgColor: randomColor,
      twitter: this.handleTweetLink(
        quotesArray[randomQuote].quote,
        quotesArray[randomQuote].author
      ),
      tumblr: this.handleTumblrLink(
        quotesArray[randomQuote].author,
        quotesArray[randomQuote].quote
      ),
    });
  }

  render() {
    return (
      <div className="App">
        <div
          className="App-header"
          style={{ backgroundColor: this.state.bgColor }}
        >
          <div id="quote-box">
            <p id="text" style={{ color: this.state.color }}>
              <i className="fa fa-quote-left" aria-hidden="true"></i>{" "}
              {this.state.quote}
            </p>
            <p id="author" style={{ color: this.state.color }}>
              - {this.state.author}
            </p>
            <div id="clickables">
              <div id="share-links">
                <a
                  id="tweet-quote"
                  className="App-link"
                  href={this.state.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Tweet this quote!"
                  style={{ backgroundColor: this.state.bgColor }}
                  onClick={this.handleTweetLink}
                >
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a
                  id="tumblr-quote"
                  className="App-link"
                  href={this.state.tumblr}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Post this quote on tumblr!"
                  style={{ backgroundColor: this.state.bgColor }}
                  onClick={this.handleTumblrLink}
                >
                  <i className="fa fa-tumblr" aria-hidden="true"></i>
                </a>
              </div>
              <button
                id="new-quote"
                onClick={this.handleButtonClick}
                style={{ backgroundColor: this.state.bgColor }}
              >
                New Quote
              </button>
            </div>
          </div>
          <span id="developer">by mikeattah</span>
        </div>
      </div>
    );
  }
}

export default App;
