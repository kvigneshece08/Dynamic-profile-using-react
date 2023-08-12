import React from "react";
import { render } from "@testing-library/react";
import { Home } from "./HomePage";

//followed TDD approach for developing the components

describe("Home component", () => {
  it("should render agent image", () => {
    const { getByRole } = render(<Home />);
    expect(getByRole("image")).toBeInTheDocument();
  });
  it("should have firstname and lastname", () => {
    const { getByText } = render(<Home />);
    expect(getByText("FNAME")).toBeInTheDocument();
    expect(getByText("LNAME")).toBeInTheDocument();
  });
  it("should have username", () => {
    const { getByText } = render(<Home />);
    expect(getByText("username")).toBeInTheDocument();
  });
  it("should have address with city, state and contry", () => {
    const { getByText } = render(<Home />);
    expect(getByText("ADDRESS")).toBeInTheDocument();
  });
  it("should have gender and dob", () => {
    const { getByText } = render(<Home />);
    expect(getByText("DOB")).toBeInTheDocument();
    expect(getByText("SEX")).toBeInTheDocument();
  });
  it("should have eyes color", () => {
    const { getByText } = render(<Home />);
    expect(getByText("EYES")).toBeInTheDocument();
  });
  it("should have timezone offset and description", () => {
    const { getByText } = render(<Home />);
    expect(getByText("offset")).toBeInTheDocument();
    expect(getByText("description")).toBeInTheDocument();
  });
  it("should have next assest button", () => {
    const { getByRole } = render(<Home />);
    expect(getByRole("RightOutlined")).toBeInTheDocument();
  });
});
