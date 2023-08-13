import React, { useState } from "react";
import Buscador from "../../components/search";
import RmItem from "./rmItem";
import { IRMCharacterEntity, IInfoResponse } from "../../models/RickMorty";
import Pagination from "../../components/pagination";
import './rmList.scss';

const RMList: React.FC = () => {

    const [characters, setCharacters] = useState<IRMCharacterEntity[]>([])
    const [error, setError] = useState('')
    const [infoResponse, setInfoResponse] = useState<IInfoResponse>()
    const [search, setSearch] = useState<string>('')
    const [page, setPage] = useState(0)


    React.useEffect(() => {
        getCharacters()       
    }, [page, search]);
    
    const getCharacters = () => {
        if(search.length % 2 || search === '')
        
        fetch(`https://rickandmortyapi.com/api/character/?name=${search}&page=${page}`)
            .then((response) => response.json())
            .then((data) => {                
                if(data.error) {
                    setCharacters([])
                    setError(data.error)
                    return
                }
                setCharacters(data.results)
                setInfoResponse(data.info)
                setError('')
            });
    }

    return (
        <div className="rm-list">
            <h2 className="rm-list-title">
                <span>Rick & Morty</span>
            </h2>
            <Buscador
                search={search}
                setSearch={setSearch}
                setPage={setPage}
            />
            <div className="rm-list-container">
                {
                    characters.length > 0 ?
                        <ul className="">
                            {
                                characters.map((el: IRMCharacterEntity, i) => {
                                                                
                                    return(
                                        <RmItem key={i} item={el} />
                                    )
                                })
                            }
                        </ul>
                    : <span className="error-message">{error}</span>
                }
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