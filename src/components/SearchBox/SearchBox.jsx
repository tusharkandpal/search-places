import "./SearchBox.css"
import React from 'react'

import { fetchPlaces } from '../../fetchPlacesService';

const SearchBox = ({searchValue, setSearchValue, page, setPlaces}) => {

  const onKeyPressHandler = async (e) => {
    if(e.key === 'Enter'){
      console.log('enter press here! ')
      const { data } = await fetchPlaces(searchValue, page);
      setPlaces(data);
      setSearchValue("");
    }
  }
    
  return (
    <div>
        <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search places..." className='searchbox' onKeyDown={onKeyPressHandler} />
    </div>
  )
}

export default SearchBox