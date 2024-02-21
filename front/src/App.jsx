import SearchSection from "./components/SearchSection"
import './assets/css/main.css';
import Header from "./components/Header";
import Aspirantes from "./components/Aspirantes";
import Profesiones from "./components/Profesiones";
import banner from "./assets/img/banner.jpg"
function App() {


  return (
    <>
      <div className="dashboard">
        <SearchSection />
        <Header />
        <main className="content-wrap">
          <header className="preventa">
            <h2>Búsqueda y selección</h2>
            <p className="text-center h5">Encontramos talento para tu empresa, en todos los cargos administrativos, profesionales y técnicos.</p>
            <div>
              <img src={banner} alt="Rcursos Humanos" />
            </div>
          </header>
          <Aspirantes />
          <Profesiones />
        </main>
      </div>
    </>
  )
}

export default App
