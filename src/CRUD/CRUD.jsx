import React, {useContext, useState, useEffect } from "react";
import { db } from "../Firebase/FirebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { DataContext} from '../context/dataContext';

function CRUD() {
  const {newCategory, setNewCategory, newDescription, setNewDescription, categories, setCategories, user} = useContext(DataContext);  

  const categoriesCollectionRef = collection(db, "categories");

  const createCategory= async () => {
    await addDoc(categoriesCollectionRef, { name: newCategory, description: String(newDescription) });
  };

  const updateCategory = async (id, name, description) => {
    const categoryDoc = doc(db, "categories", id);
    console.log(categoryDoc)
    const newFields = { name: name, description: description };
    await updateDoc(categoryDoc, newFields);
  };

  const deleteCategory = async (id) => {
    const categoryDoc = doc(db, "categories", id);
    await deleteDoc(categoryDoc);
  };

  useEffect(() => {
    const getCategories = async () => {
      const data = await getDocs(categoriesCollectionRef);
      setCategories(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getCategories();
  }, [categoriesCollectionRef]);

  return (
    <div className="App">
      <input
        placeholder="Name..."
        onChange={(event) => {
          setNewCategory(event.target.value);
        }}
      />
      <input
        type="string"
        placeholder="Description..."
        onChange={(event) => {
          setNewDescription(event.target.value);
        }}
      />

      <button onClick={createCategory}> Create Category</button>
      {categories.map((category) => {
        return (
          <div>
            {" "}
            <h1>Name: {category.name}</h1>
            <h1>Description: {category.description}</h1>
            <button
              style={{display: user !== "" ? 'block' : 'none'}}
              onClick={() => {
                updateCategory(category.id, category.name, category.description);
              }}
            >
              {" "}
              Update Category
            </button>
            <button
              style={{display: user !== "" ? 'block' : 'none'}}
              onClick={() => {
                deleteCategory(category.id);
              }}
            >
              {" "}
              Delete Category
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default CRUD;