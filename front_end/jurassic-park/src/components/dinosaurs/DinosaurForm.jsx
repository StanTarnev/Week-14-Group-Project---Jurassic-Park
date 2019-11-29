import React from 'react';

const DinosaurForm = (props) => {

  return (
    <div>
    <form>
    <input type="text" placeholder="Species" name="species"/>
    <input type="number" placeholder="Age" name="age"/>
    <select name="gender">Gender:
      <option value="female">Female</option>
      <option value="male">Male</option>
    </select>
    <select name="paddock">Paddock:
      <option value="paddock1">Paddock 1</option>
      <option value="paddock2">Paddock 2</option>
    </select>
    <button type="submit">Save</button>
    </form>
    </div>
  )
}

export default DinosaurForm;
