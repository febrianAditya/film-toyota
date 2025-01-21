import { render, screen } from "@testing-library/react"
import Detailpage from "../pages/DetailPage.jsx"

import {Provider} from "react-redux"
import store from "../store/index.js"
import { test } from "vitest"
// import { expect } from "vitest"

test("show title is this is detail page", () => {

    render(
        <Provider store={store}>
            <Detailpage/>
        </Provider>
    )

    const titlePage = screen.getByText(/this is detail page/i)

    expect(titlePage).toBeInTheDocument();
})

test("search all text", () => {
    render(
        <Provider store={store}>
            <Detailpage/>
        </Provider>
    )

    const bodyTextOne = screen.getByText(/apalah namanya/i)
    expect(bodyTextOne).toBeInTheDocument();

    const bodyTextTwo = screen.getByText(/pak ari/i)
    expect(bodyTextTwo).toBeInTheDocument();
})