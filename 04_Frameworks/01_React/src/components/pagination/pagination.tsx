import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { IInfoResponse } from '../../models/RickMorty'
import { usePaginatorContext } from "../../contexts/PaginatorNumberContext";
import ReactPaginate from 'react-paginate'
import './pagination.scss'

interface IPagination {
    infoResponse: IInfoResponse
}

const Pagination = ({
    infoResponse
}:IPagination) => {

    const { page, setPage } = usePaginatorContext()

    return (  
        <div className='pagination'> 
            {
                infoResponse && (
                    <>
                        <div className='page-display'>Page: {page === 0 ? 1 : page}</div>
                        <ReactPaginate
                            breakLabel="..."
                            className='rm-paginate'
                            containerClassName='pagination-container'
                            pageCount={infoResponse ? infoResponse.pages : 1}
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
                            initialPage={page - 1}
                        />
                    </>
                ) 
            }
        </div>
    )
}

export default Pagination