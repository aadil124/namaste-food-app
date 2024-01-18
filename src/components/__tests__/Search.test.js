import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

import MOCK_DATA from "../mocks/mockApiRestaurantCardData.json";
import { BrowserRouter } from "react-router-dom";

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

//   expect(searchBtn).toBeInTheDocument();
// });

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

//   fireEvent.change({ name: "burger" });

//   expect(searchBtn).toBeInTheDocument();
// });
