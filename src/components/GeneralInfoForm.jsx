import React from 'react';

const GeneralInfoForm = ({ generalInfo, onUpdate }) => {
  const handleChange = (field, value) => {
    console.log(`Updating general info: ${field} = ${value}`);
    onUpdate({
      ...generalInfo,
      [field]: value,
    });
  };

  return (
    <form className="GeneralInfoForm section">
      <h2>General Info</h2>

      <label>
        Full Name:
        <input
          type="text"
          placeholder="Full Name"
          value={generalInfo.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          placeholder="E-mail"
          value={generalInfo.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
      </label>

      <label>
        Phone:
        <input
          type="tel"
          placeholder="Phone Number"
          value={generalInfo.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
        />
      </label>

      <label>
        Address:
        <input
          type="text"
          placeholder="Address"
          value={generalInfo.location}
          onChange={(e) => handleChange('location', e.target.value)}
        />
      </label>
    </form>
  );
};

export default GeneralInfoForm;
