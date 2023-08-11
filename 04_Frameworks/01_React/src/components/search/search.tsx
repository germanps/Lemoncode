import React from 'react'
import TextField from '@mui/material/TextField';
import Button  from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
import './search.scss';

interface ISearch {
  search: string
}

const Search = ({search}:ISearch): React.JSX.Element => {
  return (
    <div className='search'>buscador</div>
  )
}

export default Search