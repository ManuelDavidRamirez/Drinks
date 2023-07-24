import { DrinkModalDetail } from '../../components/DrinkModalDetail'
import { DrinksList } from '../../components/DrinksList'
import { SearchForm } from '../../components/SearchForm'

export const Home = () => {

  return (
    <>
      <SearchForm />
      <DrinksList />
      <DrinkModalDetail />
    </>
  )
}
