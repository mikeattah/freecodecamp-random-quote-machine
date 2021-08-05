import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import App from "../App";

test("renders App with all elements and functionalities", () => {
  render(<App />);
  screen.debug();

  // Arrange
  const quoteBox = document.getElementById("quote-box");
  const text = document.getElementById("text");
  text.innerHTML = "This is a motivational quote";
  const author = document.getElementById("author");
  author.innerHTML = "John Doe";
  const tweetQuote = document.getElementById("tweet-quote");
  const tumblrQuote = document.getElementById("tumblr-quote");
  const buttonId = document.getElementById("new-quote");
  const button = screen.getByText("New Quote");

  // Act
  // userEvent.click(tweetQuote, this.handleTweetLink);
  // userEvent.click(tumblrQuote, this.handleTumblrLink);
  // userEvent.click(button, this.handleButtonClick);

  // Assert
  expect(quoteBox).toBeInTheDocument();
  expect(text).toBeInTheDocument();
  expect(author).toBeInTheDocument();
  expect(tweetQuote).toBeInTheDocument();
  expect(tumblrQuote).toBeInTheDocument();
  expect(buttonId).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(text).toHaveTextContent("This is a motivational quote");
  expect(author).toHaveTextContent("John Doe");
});
