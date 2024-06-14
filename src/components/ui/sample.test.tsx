import { it, describe, expect } from "vitest"
import { render, screen } from "@testing-library/react"

import { Button } from "./button"

describe("Button", () => {
  it("renders a button", () => {
    render(<Button>Test</Button>)

    expect(screen.getByText("Test")).toBeInTheDocument()
  })
})
