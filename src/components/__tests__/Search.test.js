import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

import MOCK_DATA from "../mocks/mockApiRestaurantCardData.json";
import { BrowserRouter } from "react-router-dom";



global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

// it("should load body component with search button ", async () => {
//   global.fetch = jest.fn(() => {
//     return Promise.resolve({
//       json: () => {
//         return Promise.resolve(MOCK_DATA);
//       },
//     });
//   });

//   await act(async () => {
//     render(
//       <BrowserRouter>
//         <Body />
//       </BrowserRouter>
//     );
//   });

//   const searchBtn = screen.getByRole("button", { name: "Search Restaurant" });
// //   const searchInput = screen.getByTestId("searchInput");

//   expect(searchBtn).toBeInTheDocument();
// });

it("should load search Res list for pizza text input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  // const allCardsBeforeSearch = screen.getAllByTestId("resCard");
  // expect(allCardsBeforeSearch.length).toBe(9);

  const searchBtn = screen.getByRole("button", { name: "Search Restaurant" });
  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "pizza" } });

  fireEvent.click(searchBtn);

  // screen should load 2 cards

  const allCardsAfterSearch = screen.getAllByTestId("resCard");

  expect(allCardsAfterSearch.length).toBe(2);
});