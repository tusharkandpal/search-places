import { useEffect, useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import Places from './components/PlacesTable/Places';
import { fetchPlaces } from './fetchPlacesService';

function App() {
  const [places, setPlaces] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(5);

  useEffect(() => {
    (async () => {

      const { data } = await fetchPlaces(searchValue, page);
      setPlaces(data);
    })()
  }, []);

  return (
    <div className="App">
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} page={page} setPlaces={setPlaces}/>
      <Places places={places} page={page} />
      <input type="number" value={page} onInput={(e) => setPage(e.target.value)} />
    </div>
  );
}

export default App;
