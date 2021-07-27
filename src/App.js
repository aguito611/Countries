import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";

function TopBar() {
  return (
    <header
      className="bg-DarkModeElements flex text-white p-4"
      style={{ justifyContent: "space-between" }}
    >
      <span className="font-semibold text-lg ml-10">Where in the world?</span>
      <div className="space-x-2 mr-10">
        <FontAwesomeIcon icon={faMoon} />
        <span>Dark Mode</span>
      </div>
    </header>
  );
}

function Content() {
  const [arrayCountries, setArrayCountries] = useState([]); //https://restcountries.eu/rest/v2/region/europe
  const [urlAPI, setURLAPI] = useState("https://restcountries.eu/rest/v2/all");

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(urlAPI);
        setArrayCountries(response.data.slice(0, 20));
      } catch (err) {
        console.error(err);
      }
    })();
  }, [urlAPI]);

  return (
    <section className="mx-10 mt-10">
      <div className="flex" style={{ justifyContent: "space-between" }}>
        <span className="rounded bg-DarkModeElements py-4 px-6 text-white">
          <FontAwesomeIcon icon={faSearch} />
          <input
            placeholder="Search for a country..."
            className="placeholder-white ml-4 text-sm bg-transparent outline-none"
          />
        </span>
        <FilterByRegionSelect setURLAPI={setURLAPI}/>
      </div>
      <div className="grid grid-cols-4 gap-16 mt-8">
        {arrayCountries.map((country, index) => (
          <Card country={country} key={index} />
        ))}
      </div>
    </section>
  );
}

function FilterByRegionSelect({ setURLAPI }) {
  const onChangeRegion = (event) => {
    const URL = "https://restcountries.eu/rest/v2/region/" + event.target.value
    setURLAPI(URL)
  };

  return (
    <select
      className="rounded bg-DarkModeElements py-4 px-6 text-white text-sm"
      onChange={onChangeRegion}
      defaultValue="Filter by Region"
    >
      <option hidden selected>
        Filter by Region
      </option>
      <option value="africa">Africa</option>
      <option value="americas">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europa</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}

function Card({ country }) {
  return (
    <div className="shadow bg-DarkModeElements rounded">
      <div className="h-48">
        <img
          src={country.flag}
          alt="flag"
          className="rounded-t h-48 w-full object-fill"
        />
      </div>
      <div className="pt-3 pb-5 px-7">
        <h6 className="text-white mb-3">{country.name}</h6>
        <p className="text-white text-sm">
          Population: <span className="opacity-50">{country.population}</span>
        </p>
        <p className="text-white text-sm">
          Region: <span className="opacity-50">{country.region}</span>
        </p>
        <p className="text-white text-sm">
          Capital: <span className="opacity-50">{country.capital}</span>
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-DarkModeBackground">
      <TopBar />
      <Content />
    </div>
  );
}

export default App;
