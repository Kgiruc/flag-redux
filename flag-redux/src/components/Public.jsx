import { Link } from "react-router-dom"


function Public() {
  const content = (
    <section>
        <header>
            <h1>Welcome</h1>
        </header>
        <main>
            <p>Located bla bla bla</p>
            <p>&nbsp;</p>
            <address>
                Gdańskie bydła
                365 chodori
                gdańsk 23/46
                <a href="tel:+48504746873">(555) 555-5555</a>
            </address>
        </main>
        <footer>
            <Link to="/login">
                Employee Login
            </Link>
        </footer>
    </section>
  )
  return content
}

export default Public