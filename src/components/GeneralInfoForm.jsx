import React, { useState } from 'react';

const GeneralInfoForm = ({ generalInfo, onUpdate }) => {

  return (
    <form className="GeneralInfoForm section">
      <h2>General Info</h2>

      <label>
        Full Name:
        <input
          type="text"
          placeholder="Full Name"
          value={generalInfo.fullName}
          onChange={e => onUpdate()}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          placeholder="E-mail"
          value={generalInfo.email}
          onChange={e => onUpdate()}
        />
      </label>

      <label>
        Phone:
        <input
          type="tel"
          placeholder="Phone Number"
          value={GenInfo.phone}
          onChange={e => setGenInfo({...GenInfo, phone: e.target.value})}
        />
      </label>

      <label>
        Address:
        <input
          type="text"
          placeholder="Address"
          value={GenInfo.address}
          onChange={e => setGenInfo({...GenInfo, address: e.target.value})}
        />
      </label>
    </form>
  );
};

export default GeneralInfoForm;
