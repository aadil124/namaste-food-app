import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// test("Contact us page loaded or not", () => {
//   render(<Contact />);

//   const heading = screen.getByRole("heading");

//   expect(heading).toBeInTheDocument();
// });
// test("Contact us page input loaded or not", () => {
//   render(<Contact />);

//   const inputName = screen.getByPlaceholderText("name");

//   expect(inputName).toBeInTheDocument();
// });

// test("Contact us page button loaded or not", () => {
//   render(<Contact />);

//   const button = screen.getByRole("button");

//   expect(button).toBeInTheDocument();
// });

// test("Contact us page all input field loaded or not", () => {
//   render(<Contact />);

//   const textBoxes = screen.getAllByRole("textbox");

//   expect(textBoxes).toBeTruthy();
//   //   expect(textBoxes.length).toBe(2);
// });

describe("All test cases for Contact Us", () => {
  it("Contact us page loaded or not", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });
  it("Contact us page input loaded or not", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  it("Contact us page button loaded or not", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("Contact us page all input field loaded or not", () => {
    render(<Contact />);

    const textBoxes = screen.getAllByRole("textbox");

    expect(textBoxes).toBeTruthy();
    //   expect(textBoxes.length).toBe(2);
  });
});
