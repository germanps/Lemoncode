import React from 'react'
import TextField from '@mui/material/TextField';
import Button  from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
import './search.scss';

interface ISearch {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const Search = ({search, setSearch}:ISearch): React.JSX.Element => {
  return (
    <form className='search'>
      <div className="control-wrapper">
        <TextField 
          id="outlined-basic" 
          label="Buscar" 
          variant="outlined" 
          placeholder="Busca el personaje!"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
    </form>
  )
}

export default Search