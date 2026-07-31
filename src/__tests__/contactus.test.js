import { render, screen } from "@testing-library/react";
import ContactUs from "../components/ContactUs";
import "@testing-library/jest-dom";

test("should check whether ContactUs is loaded", () => {
    render(<ContactUs />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

test("should check submit button is loaded",()=>{
    render(<ContactUs/>)

    const submit = screen.getByText("Submit");

    expect(submit).toBeInTheDocument()
})