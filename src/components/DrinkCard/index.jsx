import { Button, Card, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import useDrinks from '../../hooks/useDrinks'
import styles from './index.module.css'
import useCart from '../../hooks/useCart'
import { types } from '../../types'
import Swal from 'sweetalert2'
import useUser from '../../hooks/useUser'

export const DrinkCard = ({ drink }) => {

    const { strDrinkThumb, strDrink, idDrink } = drink
    const { handleDrinkIdClick } = useDrinks()
    const { handleToggleFavorite, favorites, user } = useUser()

    const { dispatch } = useCart()

    const handleAddCart = () => {

        dispatch({
            type: types.addItemToCart,
            payload: drink
        })

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Bebida agregada al carrito',
            showConfirmButton: false,
            timer: 1500
        })
    }

    const handleFavorite = () => {
        user ? handleToggleFavorite(idDrink)
        :
        Swal.fire({
            icon: 'error',
            title: 'Debes estar logueado',
        })
    }

    return (
        <Col md={6} lg={3}>
            <Card className='mb-4'>
                <Card.Img variant='top' src={strDrinkThumb} alt={`Imagen de ${strDrink}`} />
                <Card.Body>
                    <Card.Title className={styles.strDrink}>{strDrink}</Card.Title>
                    <a style={{cursor:"pointer"}} className='text-danger' onClick={handleFavorite}>
                        {
                            favorites.include(idDrink) ?
                                <i className='fas fa-heart fa-lg'></i>
                                :
                                <i className='far fa-heart fa-lg'></i>
                        }
                    </a>
                    <Button
                        variant={"warning"}
                        className='w-100 text-uppercase mt-2'
                        onClick={() => {
                            handleDrinkIdClick(idDrink)
                        }}
                    >
                        Ver receta
                    </Button>
                    <Button
                        variant={"danger"}
                        className='w-100 text-uppercase mt-2'
                        onClick={handleAddCart}
                    >
                        Comprar
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

DrinkCard.propTypes = {
    drink: PropTypes.object.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired
}

DrinkCard.defaultProps = {
    strDrinkThumb: "https://codigogenesis.com/genesis/2022/04/imagen-placeholder-por-defecto-WooCommerce.png",
    strDrink: "Nombre de la bebida"
}