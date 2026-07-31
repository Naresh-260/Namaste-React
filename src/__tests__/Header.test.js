import { Provider } from "react-redux"
import Header from "../components/Header"
import { fireEvent, render, screen} from "@testing-library/react"
import appStore from "../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


it("Should render header Component with login button",()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
             <Header/>
        </Provider>
    </BrowserRouter>)

    const LogginButton = screen.getByRole("button")

    expect(LogginButton).toBeInTheDocument()
})

it("Should render header Component with Cart (0 items)",()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
             <Header/>
        </Provider>
    </BrowserRouter>)

    const LogginButton = screen.getByText("Cart(0 items)")

    expect(LogginButton).toBeInTheDocument()
})

it("Should render header Component with login and logout functionality",()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
             <Header/>
        </Provider>
    </BrowserRouter>)

    const LogginButton = screen.getByText("Login")

    fireEvent.click(LogginButton)

    const LogOutButton = screen.getByText("Logout")

    expect(LogOutButton).toBeInTheDocument()
})

