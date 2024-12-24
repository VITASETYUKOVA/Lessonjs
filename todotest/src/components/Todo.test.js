import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Footer from "./Footer";
import { Provider } from "react-redux";
import store from "../store/store";
import { reset } from "../store/todosSlice";

test("This page has a Todo App header", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  await waitFor(() => expect(screen.getByText("Todo App")).toBeInTheDocument());
});

test("should allow letters and digits in the input field", async () => {
  render(
    <Provider store={store}>
      <TodoForm />
    </Provider>
  );

  const inputField = screen.getByPlaceholderText("Title");

  fireEvent.change(inputField, { target: { value: "Test Task 123" } });

  expect(inputField.value).toBe("Test Task 123");
});

test('should show error when "Add" button is clicked with empty input field', async () => {
  render(
    <Provider store={store}>
      <TodoForm />
    </Provider>
  );

  const inputField = screen.getByPlaceholderText("Title");
  const addButton = screen.getByText("Add Todo");

  fireEvent.click(addButton);

  const errorMessage = screen.getByText(
    "Both title and description are required"
  );
  expect(errorMessage).toBeInTheDocument();
});
beforeEach(() => {
  store.dispatch(reset());
});

test("should update the total todos count in Footer after adding a new todo", async () => {
  render(
    <Provider store={store}>
      <TodoForm />
      <TodoList />
      <Footer />
    </Provider>
  );

  const titleInput = screen.getByPlaceholderText(/title/i);
  const descriptionInput = screen.getByPlaceholderText(/description/i);
  const submitButton = screen.getByText(/add todo/i);

  fireEvent.change(titleInput, { target: { value: "New Todo" } });
  fireEvent.change(descriptionInput, {
    target: { value: "This is a new todo item" },
  });

  fireEvent.click(submitButton);

  await waitFor(() => {
    const totalTodos = screen.getByText(/total todos:/i);
    expect(totalTodos).toHaveTextContent("Total Todos: 1");
  });
});
