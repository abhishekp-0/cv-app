import "../styles/Resume.css";
import WorkEduList from "./WorkEduList";
import WorkForm from "./WorkForm";
import { useState } from "react";

export default function WorkSection({workList, onUpdate}){
    const [editing, setEditing] = useState({isEditing: false, currentIndex: workList.length});

    function handleAdd() {
        setEditing({isEditing: true, currentIndex: workList.length});
    }

    function handleEdit(index){
        setEditing({isEditing: true, currentIndex: index});
    }

    function handleSave(newItem){
        if(editing.currentIndex < workList.length){
            onUpdate(workList.map((item, idx) => (idx === editing.currentIndex ? newItem : item)));
        } else {
            onUpdate([...workList, newItem]);
        }
        setEditing({isEditing: false, currentIndex: workList.length});
    }

    function handleCancel() {
        setEditing({isEditing: false, currentIndex: workList.length});
    }

    function handleDelete() {
        const newList = workList.filter((_, idx) => idx !== editing.currentIndex);
        onUpdate(newList);
        setEditing({isEditing: false, currentIndex: workList.length});
    }

    return(editing.isEditing ?
        <div className="section">
            <h2>Work Experience</h2>
            <WorkForm 
                workItem={editing.currentIndex < workList.length ? workList[editing.currentIndex] : {
                    title: '',
                    subtitle: '',
                    startDate: '',
                    endDate: '',
                    location: '',
                    description: ''
                }} 
                onSave={handleSave} 
                onCancel={handleCancel} 
                onDelete={handleDelete} 
            />
        </div>
        :
        <div className="section">
            <h2>Work Experience</h2>
            <WorkEduList ItemsList={workList} handleEdit={handleEdit}/>
            <button onClick={handleAdd}>ADD WORK EXPERIENCE</button>
        </div>
    );
}