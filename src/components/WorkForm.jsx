import "../styles/Resume.css";
import React, { useState } from 'react';

export default function WorkForm({workItem, onSave, onCancel, onDelete}) {
    const [formData, setFormData] = useState({
        title: workItem.title || '',
        subtitle: workItem.subtitle || '',
        startDate: workItem.startDate || '',
        endDate: workItem.endDate || '',
        location: workItem.location || ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <form className="WorkForm WorkForm">
            <label>
                Company Name:
                <input
                    type="text"
                    name="title"
                    placeholder="Enter Company Name"
                    value={formData.title}
                    onChange={handleChange}
                />
            </label>

            <label>
                Position Title:
                <input
                    type="text"
                    name="subtitle"
                    placeholder="Enter Position Title"
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

            <label>
                Description:
                <textarea
                    name="description"
                    placeholder="Enter Job Description"
                    value={formData.description}
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