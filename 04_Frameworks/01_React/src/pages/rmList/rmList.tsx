import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import Button  from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import './rmList.scss';

enum EStatus {
    alive,
    dead,
    unknown
}
enum EGender {
    female, 
    male, 
    genderless,
    unknown
}

interface IPlace {
    name: string,
    url: string
}

interface IRMCharacterEntity {
    id: string
    name: string
    status: EStatus
    species: string
    type: string
    gender: EGender
    origin: IPlace
    location: IPlace
    image: string
    url: string
}

const RMList: React.FC = () => {


    const [characters, setCharacters] = useState<IRMCharacterEntity[]>([])

    React.useEffect(() => {
        getCharacters()
      }, []);
    
      const getCharacters = () => {
        fetch(`https://rickandmortyapi.com/api/character`)
          .then((response) => response.json())
          .then((json) => setCharacters(json)
        );
      }


    return (
        <div className="list">
            <h2 className="list-title">
                <span>Listado de organizaciones</span>
            </h2>

        </div>
    )
}

export default RMList