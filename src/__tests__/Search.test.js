import {render,screen, fireEvent} from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/restuarentListMock.json"
import {act} from "react"
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)
  })
);

it("should display the correct search results", async () => {

 await act( async() => {
    render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>
);
  });
  const searchInput = screen.getByTestId("search-input");
  fireEvent.change(searchInput, { target: { value: "coffee" } });

  const searchButton = screen.getByText("Search");
  fireEvent.click(searchButton);
  const filteredRestaurants = screen.getAllByTestId("res-list")
  expect(filteredRestaurants.length).toBe(4); 
});

it("should diplay top rated restaurants when top rated button is clicked", async () => {

  await act( async() => {
        render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
    );
      });
  const topRatedButton = screen.getByText("Top Rated Restaurants");
  fireEvent.click(topRatedButton);
  const filteredRestaurants = screen.getAllByTestId("res-list")
  expect(filteredRestaurants.length).toBe(3); 
} )

it