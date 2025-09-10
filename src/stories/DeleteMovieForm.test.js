import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import {DeleteMovieForm} from "./DeleteMovieForm";

describe("DeleteMovieForm", () => {
    it("renders confirmation message", () => {
        render(<DeleteMovieForm onSubmit={jest.fn()}/>);
        expect(
            screen.getByText(/are you sure you want to delete this movie\?/i)
        ).toBeInTheDocument();
    });

    it("renders a submit button", () => {
        render(<DeleteMovieForm onSubmit={jest.fn()}/>);
        const button = screen.getByRole("button", {name: /submit/i});
        expect(button).toBeInTheDocument();
    });

    it("calls onSubmit when submit button is clicked", () => {
        const onSubmitMock = jest.fn();
        render(<DeleteMovieForm onSubmit={onSubmitMock}/>);

        const button = screen.getByRole("button", {name: /submit/i});
        fireEvent.click(button);

        expect(onSubmitMock).toHaveBeenCalledTimes(1);
    });
});
