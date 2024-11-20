import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter"; 

beforeEach(() => {
  render(<Counter />);
});

test("renders counter message", () => {
  // Check if the Counter header is rendered
  expect(screen.getByText(/Counter/i)).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  // Check if the initial count is 0
  expect(screen.getByTestId("count")).toHaveTextContent("0");
});

test("clicking + increments the count", () => {
  // Simulate clicking the increment button
  const incrementButton = screen.getByText("+");
  fireEvent.click(incrementButton);
  
  // Check if the count increments
  expect(screen.getByTestId("count")).toHaveTextContent("1");
});

test("clicking - decrements the count", () => {
  // Simulate clicking the decrement button
  const decrementButton = screen.getByText("-");
  fireEvent.click(decrementButton);
  
  // Check if the count decrements
  expect(screen.getByTestId("count")).toHaveTextContent("-1");
});
