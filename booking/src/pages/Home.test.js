import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import store from "../store";


test("should render the Home component and show the form", () => {
  render(
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>
  );
  const heading = screen.getByText(/Travel to Booking/i);
  expect(heading).toBeInTheDocument();
});
