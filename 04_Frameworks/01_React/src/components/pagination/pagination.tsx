import React from 'react'
import { Button } from '@mui/material'
import { IInfoResponse } from '../../models/RickMorty'
import './pagination.scss'

interface IPagination {
    infoResponse: IInfoResponse
    page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
}

const Pagination = ({
    infoResponse,
    page,
    setPage
}:IPagination) => {

    const nextPage = () => {
        if(page === 0) setPage(2)
        else setPage(prevState => prevState +1)
    }
    
    const prevPage = () => {
        if(page === 1 || page === 0 ) return
        setPage(prevState => prevState - 1)
    }

    const pagesGroup = () => {

        let pages = []
        if(infoResponse) 
            for (let i = 0; i <= infoResponse.pages; i++) {
                pages.push(
                    <li key={i} className="pagination-list-item">
                        <Button 
                            onClick={() => { setPage(i) } } 
                            size='small'
                            //className={ this.isPageActive(i) ? 'active': '' }
                        >
                            { i }
                        </Button>
                    </li>
                )
            }
        return pages
    }

    return ( 
        <div className='pagination'>
            <Button onClick={prevPage} variant='contained' color='info' size="medium">Anterior</Button>
            <ul className='pagination-list'>
                {pagesGroup()}
            </ul>
            <Button onClick={nextPage} variant='contained' color='info' size="medium">Siguiente</Button>
        </div>
    )
}

export default Pagination