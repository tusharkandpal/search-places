import React from 'react'
import "./Places.css";

const Places = ({ places, page }) => {
  return (
    
    <>{places.length !== 0 ? <>
    <table className='places_table'>
    <thead>
      <tr className='heading row'>
        <th className='table_col'>#</th>
        <th className='table_col'>City</th>
        <th className='table_col'>Country</th>
      </tr>
    </thead>
    <tbody>
        {places.map(place => (
            <tr key={place.id} className='row'>
            <td className='table_col'>{place.id}</td>
            <td className='table_col'>{place.city}</td>
            <td className='table_col'>{place.country}</td>
          </tr>
        ))}
    </tbody>
  </table>
  <button className='page_btn'>{page}</button></>: <p>No Result Found...</p>}

  {!Boolean(places) && <p>Start Searching...</p>}
  </> 
   
  )
}

export default Places