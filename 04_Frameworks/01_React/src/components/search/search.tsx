import React from 'react'
import TextField from '@mui/material/TextField';
import Button  from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
import './search.scss';

interface ISearch {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
  setPage: React.Dispatch<React.SetStateAction<number>>
}

const Search = ({search, setSearch, setPage}:ISearch): React.JSX.Element => {

  const handleSearchChange = (e) => {
    setPage(1)
    setSearch(e.target.value)
  }
 
  return (
    <form className='search'>
      <div className="control-wrapper">
        <TextField 
          id="outlined-basic" 
          label="Busca el personaje" 
          variant="outlined" 
          placeholder="Nombre o apellido!"
          onChange={(e) => handleSearchChange(e)}
          value={search}
        />
      </div>
    </form>
  )
}

export default Search