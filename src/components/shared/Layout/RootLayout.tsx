import { Outlet } from "react-router-dom"
import { Header } from "../Header"

export function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}