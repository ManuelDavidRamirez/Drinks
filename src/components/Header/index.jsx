import { useState } from "react"
import { CartCanvas } from "../CartCanvas"
import styles from "./index.module.css"
import { Badge, Button } from "react-bootstrap"
import useCart from "../../hooks/useCart"
import { Link } from "react-router-dom"
import useUser from "../../hooks/useUser"

export const Header = () => {

  const [showCart, setShowCart] = useState(false)

  const handleShowCart = () => setShowCart(true)
  const handleCloseCart = () => setShowCart(false)

  const { cart } = useCart()
  const { user, logout } = useUser()

  const handleLogout = () => {
    logout()
  }

  return (
    <header className={`d-flex justify-content-between p-3 ${styles.header}`}>
      <Link to={"/"} className="nav-link">
        <h1>Search Drinks</h1>
      </Link>
      <div className="d-flex gap-2 align-items-center">
        {
          user ?
            (
              <div className="d-flex gap-2">
                <Link to={"/user/profile"} className="btn btn-lg btn-outline-light d-flex gap-2 align-items-center">
                  <i className="fas fa-user fa-lg"></i>
                  <span>{user.name}</span>
                </Link>
                <Button onClick={handleLogout} variant="outline-light" size="lg">
                  <i className="fas fa-sign-out-alt fa-lg"></i>
                </Button>
              </div>
            ) : (
              <>
                <Link to={"/login"} className="btn btn-lg btn-outline-light">
                  <i className="fas fa-sign-in-alt fa-lg"></i>
                </Link>
                <Link to={"/register"} className="btn btn-lg btn-outline-light">
                  <i className="fas fa-user-plus fa-lg"></i>
                </Link>
              </>
            )
        }
        <div className="position-relative">
          <Button variant="outline-light" size="lg" onClick={handleShowCart}>
            <i className="fas fa-shopping-cart fa-lg"></i>
          </Button>
          <Badge className="position-absolute top-50 start-50" pill bg="warning">{cart.length}</Badge>
        </div>
      </div>
      <CartCanvas showCart={showCart} handleCloseCart={handleCloseCart} />
    </header>
  )
}