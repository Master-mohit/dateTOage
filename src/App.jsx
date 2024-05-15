import React, { useState } from 'react';

const App = () => {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (dob) {
      const today = new Date();
      const birthDate = new Date(dob);
      let userAge = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        userAge--;
      }
      setAge(userAge);
    }
  };

  const resetHandler = () => {
    setDob("");
    setAge(null);
  };

  return (
    <div>
      <div id="main">
        <div id="left">
          <div id="input">
            <form onSubmit={submitHandler}>
              <input
                onChange={(e) => setDob(e.target.value)}
                value={dob}
                type="date"
              />
              <button type="submit">Submit</button>
              <button type="button" onClick={resetHandler}>Reset</button>
            </form>
          </div>
        </div>
        <div id="right">
          <div id="circle">
            {age !== null && <p>Age: {age}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
