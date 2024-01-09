import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should be loaded header with cart items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartText = screen.getByText("Cart - (0 items)");

  expect(cartText).toBeInTheDocument();
});

it("should be loaded header with logo", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const AltText = screen.getByAltText("logo");

  expect(AltText).toBeInTheDocument();
});

it("should be loaded header with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", { name: "Login" });

  expect(loginBtn).toBeInTheDocument();
});

it("should be loaded header with login and logout button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginBtn);
  const logoutBtn = screen.getByRole("button", { name: "Logout" });

  expect(logoutBtn).toBeInTheDocument();
});
