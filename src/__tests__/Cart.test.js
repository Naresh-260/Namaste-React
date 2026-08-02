import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Cart from "../components/Cart";
import appStore from "../utils/appStore";
import MOCK_DATA from "../mocks/resMenuMock.json";
import "@testing-library/jest-dom";



global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)
  })
);


it("should display the correct items in the cart", async () => {
  await act(async() => {
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
            <Menu/>
            <Cart/>
        </Provider>
    </BrowserRouter>
);
  })

  const addbuttons = screen.getAllByRole("button", { name: "- ADD +" });
  fireEvent.click(addbuttons[0]);
  expect(screen.getByTestId("cart")).toHaveTextContent("Cart(1 items)");

})

