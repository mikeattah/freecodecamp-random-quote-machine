import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";

test("renders App with all elements and functionalities", () => {
  render(<App />);

  // Arrange
  const quoteBox = document.getElementById("quote-box");
  const text = document.getElementById("text");
  const author = document.getElementById("author");
  const tweetQuote = document.getElementById("tweet-quote");
  const tumblrQuote = document.getElementById("tumblr-quote");
  const button = screen.getByText("New Quote");

  // Act

  // Assert
  expect(quoteBox).toBeInTheDocument();
  expect(text).toBeInTheDocument();
  expect(author).toBeInTheDocument();
  expect(tweetQuote).toBeInTheDocument();
  expect(tumblrQuote).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
