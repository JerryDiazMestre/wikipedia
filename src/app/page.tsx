import Header from './component/Header'
import Search from './component/Search'

export default function Home() {
  return (
    <>
      <Header />
      <p>
        Wikipedia is a free, online encyclopedia that anyone can edit. This app allows users to tap into the vast encyclopedia by way of a search bar in order to see the snippets and a link to the originale article
      </p>

      <Search />
    </>
  )
}
