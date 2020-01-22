import React, { useState } from 'react';
import './App.css';
import Members from './components/Members';
import MemberForm from './components/MemberForm';

function App() {
  const [member, setMember] = useState([]);
  const addNewMember = member => {
    const newMember = setMember([member, member]);
  };

  return (
    <div className="App">
      <h1>Members</h1>
      <MemberForm addNewMember={addNewMember} />
      <Members member={member} />
    </div>
  );
}

export default App;
