import React, { useState } from "react";
import Buscador from "../../components/search";
import RmItem from "./rmItem";
import { IRMCharacterEntity, IInfoResponse } from "../../models/RickMorty";
import { Link } from "react-router-dom";
import './rmList.scss';
import Pagination from "../../components/pagination";

const RMList: React.FC = () => {

    const [characters, setCharacters] = useState<IRMCharacterEntity[]>([])
    const [infoResponse, setInfoResponse] = useState<IInfoResponse>()
    const [search, setSearch] = useState<string>('')
    const [page, setPage] = useState(0)


    React.useEffect(() => {
        getCharacters()
                
    }, [page, search]);
    
    const getCharacters = () => {
        fetch(`https://rickandmortyapi.com/api/character/?name=${search}&page=${page}`)
            .then((response) => response.json())
            .then((json) => {
                setCharacters(json.results)
                setInfoResponse(json.info)
            }
        );
        //console.log(characters);
    }


    return (
        <div className="rm-list">
            <h2 className="rm-list-title">
                <span>Rick & Morty</span>
            </h2>
            <Buscador
                search={search}
            />
            <div className="rm-list-container">
                <ul className="">
                    {
                        characters.map((el: IRMCharacterEntity, i) => {
                                                        
                            return(
                                <RmItem key={i} item={el} />
                            )
                        })
                    }
                </ul>
            </div>
            <Pagination
                infoResponse={infoResponse}
                page={page}
                setPage={setPage}
            />
        </div>
    )
}

export default RMList