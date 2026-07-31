import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/restaurentCardMock.json";
import "@testing-library/jest-dom";

it("should render restaurant name", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    expect(screen.getByText("Pizza Hut")).toBeInTheDocument();
});