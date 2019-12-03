import React from 'react';

const DinosaurForm = (props) => {

  const options = props.paddocks.map((paddock, index) => {
    return <option key={index} value={paddock._links.self.href}>{paddock.name} ({paddock.type})</option>
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    const dinosaur={};
    dinosaur.name = event.target.name.value;
    dinosaur.species = event.target.species.value;
    dinosaur.type = event.target.type.value;
    dinosaur.gender = event.target.gender.value;
    dinosaur.paddock = event.target.paddock.value;
    props.handleDinosaurPost(dinosaur);
    }
  return (
    <div>
      <h3>Add a new dinosaur</h3>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" name="name"/>
      <select name="species">Gender:
        <option value="Cerasinops">Cerasinops</option>
        <option value="Archaeoceratops">Archaeoceratops</option>
        <option value="Microceratops">Microceratops</option>
      </select>
      <select name="gender">Gender:
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>
      <select name="type">Type:
        <option value="herbivore">Herbivore</option>
        <option value="carnivore">Carnivore</option>
      </select>
      <select name="paddock">
        {options}
      </select>
      <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default DinosaurForm;
