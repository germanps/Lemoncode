import React from "react";

interface IOrganizationContext {
    organization: string
    setOrganization: (value: string) => void
}

const OrganizationContext = React.createContext<IOrganizationContext>({
    organization: '',
    setOrganization: () => {}
})

export const OrganizationProvider = (props) => {
    const [organization, setOrganization] = React.useState<string>('Lemoncode')

    return (
        <OrganizationContext.Provider value={{organization, setOrganization}}>
            {props.children}
        </OrganizationContext.Provider>
    )
}

export const useOrganizationContext = () => {
    return React.useContext(OrganizationContext)
}