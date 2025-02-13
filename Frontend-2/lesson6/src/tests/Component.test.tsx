import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import {Component, Func, Button} from "../Component";

test('Component renders the heading', () => {
	render(<Component />);
	expect(screen.getByRole("heading", { name: /Component/i })).toBeInTheDocument();
});

test('Function returns the correct string', () => {
	expect(Func()).toBe("Function");
});

test('Button changes text on click', () => {
	render(<Button />);
	fireEvent.click(screen.getByRole("button"));
	expect(screen.getByRole("button", { name: /Texto alterado/i })).toBeInTheDocument();
});