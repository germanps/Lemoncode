import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { IInfoResponse } from '../../models/RickMorty'
import './pagination.scss'
import ReactPaginate from 'react-paginate'

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

    return ( 
        <div className='pagination'>
            <div className='page-display'>Page: {page === 0 ? '1' : page}</div>
            <ReactPaginate
                breakLabel="..."
                className='rm-paginate'
                containerClassName='pagination-container'
                pageCount={infoResponse ? infoResponse.pages : null}
                onPageChange={(e) => setPage(e.selected + 1)}
                marginPagesDisplayed={1}
                pageRangeDisplayed={5}
                renderOnZeroPageCount={null}
                nextClassName='item next'
                nextLabel={<ArrowForwardIosIcon />}
                previousLabel={<ArrowBackIosIcon />}
                disabledClassName='disabled-page'
                previousClassName='item previous'
                activeClassName='active'
                breakClassName='item break'
                pageLinkClassName='link'
                pageClassName='item pagination-page'
            />
        </div>
    )
}

export default Pagination