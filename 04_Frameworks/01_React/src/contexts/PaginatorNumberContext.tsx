import React from "react"

interface IPaginatorContext {
    page: number
    setPage: (value: number) => void
}
const PaginatorContext = React.createContext<IPaginatorContext>({
    page: 0,
    setPage: () => {}
})

export const PaginationProvider = (props) => {
    const [page, setPage] = React.useState<number>(0)

    return (
        <PaginatorContext.Provider value={{page, setPage}}>
            {props.children}
        </PaginatorContext.Provider>
    )
}

export const usePaginatorContext = () => {
    return React.useContext(PaginatorContext)
}