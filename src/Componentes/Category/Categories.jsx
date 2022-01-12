import React,  {useContext, useEffect}from "react";
import "./categories.css";
import { db } from "../../Firebase/FirebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { DataContext} from '../../context/dataContext';
export default function Category() {
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
    <div id="contentCategory">
      <div
        className="imgCategory"
        id="imagenDamas"
        border="5px solclassName  #C39C84"
      >
        {" "}
        <h1 className="nameCategory">Damas</h1>
        {/* <button onClick={createCategory}> Create Category</button> */}
      {categories.map((category) => {
        return (
          <div>
            {" "}
            <h2>{category.name}</h2>
            <button
              onClick={() => {
                updateCategory(category.id, category.name, category.description);
              }}
            >
              {" "}
              Update Category
            </button>
            <button
              onClick={() => {
                deleteCategory(category.id);
              }}
            >
              Delete Category
            </button>
       
      </div>
        );
      })}
      </div>
      <div
        className="imgCategory"
        id="imagenHombre"
        border="5px solclassName  #C39C84"
      >
        {" "}
        <h1 className="nameCategory">Hombres</h1>{" "}
      </div>
      <div
        className="imgCategory"
        id="imagenAccesorios"
        border="5px solclassName  #C39C84"
      >
        {" "}
        <h1 className="nameCategory">Accesorios </h1>{" "}
      </div>
      <div
        className="imgCategory"
        id="imagenHogar"
        border="5px solclassName  #C39C84"
      >
        {" "}
        <h1 className="nameCategory">Hogar</h1>{" "}
      </div>
      <div
        className="imgCategory"
        id="imagenNiños"
        border="5px solclassName  #C39C84"
      >
        {" "}
        <h1 className="nameCategory">Niños</h1>{" "}
      </div>
      <div id= "contentCategory">
      <div id="imgCategory" ><h1 id= "nameCategory">Damas</h1></div>
      <div id="imgCategory" ><h1 id= "nameCategory">Hombres</h1></div>
      <div id="imgCategory" ><h1 id= "nameCategory">Hogar</h1></div>
      <div id="imgCategory" ><h1 id= "nameCategory">Accesorios</h1></div>
      <div id="imgCategory" ><h1 id= "nameCategory">Niños</h1></div>
    </div>
      </div>
  );
}
