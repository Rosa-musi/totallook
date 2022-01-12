import React, {createContext, useState, useEffect } from 'react'

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [showModal, setShowModal] = useState("");
    const [hideModal, setHideModal] = useState("");
    const [user, setUser] = useState("");
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <DataContext.Provider 
            value={{
                showModal, 
                setShowModal, 
                hideModal, 
                setHideModal,
                email,
                setEmail,
                password,
                setPassword,
                user,
                setUser
                }}>
            {props.children}
        </DataContext.Provider>
    )
}