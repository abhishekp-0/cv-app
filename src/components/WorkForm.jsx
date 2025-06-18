import "../styles/Resume.css";
import React, { useState } from 'react';

export default function EduForm({eduItem, onSave, onCancel, onDelete}) {
    const [formData, setFormData] = useState({
        title: eduItem.title || '',
        subtitle: eduItem.subtitle || '',
        startDate: eduItem.startDate || '',
        endDate: eduItem.endDate || '',
        location: eduItem.location || ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <form className="WorkEduForm EduForm">
            <label>
                School:
                <input
                    type="text"
                    name="title"
                    placeholder="Enter School/University"
                    value={formData.title}
                    onChange={handleChange}
                />
            </label>

            <label>
                Degree:
                <input
                    type="text"
                    name="subtitle"
                    placeholder="Enter Degree/Field of Study"
                    value={formData.subtitle}
                    onChange={handleChange}
                />
            </label>

            <label>
                Start Date:
                <input
                    type="date"
                    name="startDate"
                    placeholder="Enter Start Date"
                    value={formData.startDate}
                    onChange={handleChange}
                />
            </label>

            <label>
                End Date:
                <input
                    type="date"
                    name="endDate"
                    placeholder="Enter End Date"
                    value={formData.endDate}
                    onChange={handleChange}
                />
            </label>

            <label>
                Location:
                <input
                    type="text"
                    name="location"
                    placeholder="Enter Location"
                    value={formData.location}
                    onChange={handleChange}
                />
            </label>

            <div>
                <button type="button" onClick={() => onDelete()}>Delete</button>
                <button type="button" onClick={() => onSave(formData)}>Save</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </div>
            
        </form>
    );
}