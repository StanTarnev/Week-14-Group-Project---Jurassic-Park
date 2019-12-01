import React from 'react';

const DinosaurForm = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const dinosaur ={
      "name": event.target.name.value,
      "species": event.target.species.value,
      "type": event.target.type.value,
      "gender": event.target.gender.value,
      "age": event.target.age.value
    }
    props.handleDinosaurPost(dinosaur);

  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Name" name="name"/>
    <input type="text" placeholder="Species" name="species"/>
    <input type="number" placeholder="Age" name="age"/>
    <select name="gender">Gender:
      <option value="female">Female</option>
      <option value="male">Male</option>
    </select>
    <select name="type">Type:
      <option value="herbivore">Herbivore</option>
      <option value="carnivore">Carnivore</option>
    </select>
    <button type="submit">Save</button>
    </form>
    </div>
  )
}

export default DinosaurForm;
