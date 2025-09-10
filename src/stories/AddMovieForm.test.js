import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { AddMovieForm } from "./AddMovieForm";

const genres = [
    { id: "1", name: "Comedy" },
    { id: "2", name: "Horror" },
];

describe("AddMovieForm", () => {
    it("renders inputs, textarea, and buttons", () => {
        render(<AddMovieForm genres={genres} onSubmit={jest.fn()} onClose={jest.fn()} />);

        expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/movie url/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/genre/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/release date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/rating/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/runtime/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/overview/i)).toBeInTheDocument();

        expect(screen.getByRole("button", { name: /reset/i })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
    });

    it("pre-fills values when formData is passed", () => {
        const prefilled = {
            title: "Inception",
            url: "https://example.com",
            selectedGenre: "1",
            date: "2023-01-01",
            rating: 8.5,
            runtime: 120,
            overview: "A dream within a dream",
        };

        render(
            <AddMovieForm
                genres={genres}
                onSubmit={jest.fn()}
                onClose={jest.fn()}
                formData={prefilled}
            />
        );

        expect(screen.getByLabelText(/title/i)).toHaveValue("Inception");
        expect(screen.getByLabelText(/movie url/i)).toHaveValue("https://example.com");
        expect(screen.getByLabelText(/genre/i)).toHaveValue("1");
        expect(screen.getByLabelText(/release date/i)).toHaveValue("2023-01-01");
        expect(screen.getByLabelText(/rating/i)).toHaveValue(8.5);
        expect(screen.getByLabelText(/runtime/i)).toHaveValue(120);
        expect(screen.getByLabelText(/overview/i)).toHaveValue("A dream within a dream");
    });

    it("calls onClose when Reset button is clicked", () => {
        const onCloseMock = jest.fn();
        render(<AddMovieForm genres={genres} onSubmit={jest.fn()} onClose={onCloseMock} />);

        fireEvent.click(screen.getByRole("button", { name: /reset/i }));

        expect(onCloseMock).toHaveBeenCalledTimes(1);
    });
});
