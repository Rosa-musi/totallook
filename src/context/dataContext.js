import React, {createContext, useState, useEffect } from 'react'

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [showModal, setShowModal] = useState("");
    const [hideModal, setHideModal] = useState("");
    const [user, setUser] = useState("");
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [newCategory, setNewCategory] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [categories, setCategories] = useState([]);

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
                setUser,
                newCategory,
                setNewCategory,
                newDescription,
                setNewDescription,
                categories,
                setCategories
                }}>
            {props.children}
        </DataContext.Provider>
    )
}