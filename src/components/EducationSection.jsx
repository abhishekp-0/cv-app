import "../styles/Resume.css";
import WorkEduList from "./WorkEduList";
import EduForm from "./EduForm";
import { useState } from "react";
export default function EducationSection({eduList, onUpdate}){
    const [editing, setEditing] = useState({isEditing: false, currentIndex: eduList.length});

    function handleAdd() {
        setEditing({isEditing: true, currentIndex: eduList.length});
    }

    function handleEdit(index){
        //set the editing state to true and set the current index to the index of the item
        console.log("Editing item at index:", index);
        console.log("Current item list:", eduList);
        console.log("Current item to edit:", eduList[index]);
        setEditing({isEditing: true, currentIndex: index});
        console.log("Curent Index:", editing.currentIndex);
    }

    function handleSave(newItem){
        // console.log("Saving item:", newItem);
        // console.log("Current index:", editing.currentIndex);
        // console.log("Current item list:", eduList);
        //if the newItem is empty, return
        //change the itemlist at index to the new item if currentIndex is less than the length of the itemlist
        if(editing.currentIndex < eduList.length){
            onUpdate(eduList.map((item, idx) => (idx === editing.currentIndex ? newItem : item)));
        }
        //if currentIndex is equal to the length of the itemlist, add the new item to the end of the itemlist
        else{
            onUpdate([...eduList, newItem]);
        }
        // console.log("Current item list:", eduList);
        setEditing({isEditing: false, currentIndex: eduList.length});
    }

    function handleCancel() {
        setEditing({isEditing: false, currentIndex: eduList.length});
    }

    function handleDelete() {
        const newList = eduList.filter((_, idx) => idx !== editing.currentIndex);
        onUpdate(newList);
        setEditing({isEditing: false, currentIndex: eduList.length});
    }

    console.log("Current editing state:", editing);
    console.log("Current education list:", eduList);
    return(editing.isEditing ?
    <div className="section">
        <h2>Education</h2>
        <EduForm eduItem={editing.currentIndex < eduList.length ? eduList[editing.currentIndex] : {
            title: '',
            subtitle: '',
            startDate: '',
            endDate: '',
            location: ''
        }} onSave={handleSave} onCancel={handleCancel} onDelete={handleDelete} />
    </div>
    :
    <div className="section">
        <h2>Education</h2>
        <WorkEduList ItemsList={eduList} handleEdit={handleEdit} />
        <button onClick={handleAdd}>ADD EDUCATION</button>
    </div>
    );
}