import React, { useState } from 'react';

const GeneralInfoForm = ({ fullName: initialFullName="", email: initialEmail="", phone: initialPhone="", address: initialAddress="" }) => {
  // const [fullName, setFullName] = useState(initialFullName);
  // const [email, setEmail] = useState(initialEmail);
  // const [phone, setPhone] = useState(initialPhone);
  // const [address, setAddress] = useState(initialAddress);
  const [GenInfo, setGenInfo] = useState({fullName: initialFullName, email: initialEmail, phone: initialPhone, address: initialAddress});

  console.log(GenInfo.fullName, GenInfo.email, GenInfo.phone, GenInfo.address);

  return (
    <form className="GeneralInfoForm section">
      <h2>General Info</h2>

      <label>
        Full Name:
        <input
          type="text"
          placeholder="Full Name"
          value={GenInfo.fullName}
          onChange={e => setGenInfo({...GenInfo, fullName: e.target.value})}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          placeholder="E-mail"
          value={GenInfo.email}
          onChange={e => setGenInfo({...GenInfo, email: e.target.value})}
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
