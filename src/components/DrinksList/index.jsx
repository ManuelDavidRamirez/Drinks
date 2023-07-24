import { Row } from 'react-bootstrap'
import useDrinks from '../../hooks/useDrinks'
import { DrinkCard } from '../DrinkCard'

export const DrinksList = () => {

    const {drinks} = useDrinks()

  return (
    <Row className='mt-5'>
        {
            drinks.map((drink) => (
                <DrinkCard key={drink.idDrink} drink={drink}/>
            ))
        }
    </Row>
  )
}