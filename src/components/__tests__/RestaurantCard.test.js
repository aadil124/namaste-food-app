import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import withPromotedCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/RestaurantMockData.json";
import "@testing-library/jest-dom";

it("Should load the restaurant component with Restaurant card", () => {
  render(<RestaurantCard restaurant={MOCK_DATA} />);

  const textName = screen.getByText("Domino's Pizza");

  expect(textName).toBeInTheDocument();
});

it("Should load the restaurant component with promoted label card", () => {
  const PromotedRestaurantCard = withPromotedCard(RestaurantCard);
  render(<PromotedRestaurantCard restaurant={MOCK_DATA} />);

  const textName2 = screen.getByText("Domino's Pizza");

  expect(textName2).toBeInTheDocument();
});
