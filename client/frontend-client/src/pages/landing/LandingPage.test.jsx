import { render, screen } from "@testing-library/react";
import LandingPage from "./LandingPage";
import { describe } from "vitest";

describe('Landing page renders navbar with Products', () => {
  render(<LandingPage />);
  except(screen.getByText(/Products/i)).toBeInTheDocument();
})