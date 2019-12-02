import React from 'react';

const PaddockForm = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const paddock ={
      "name": event.target.name.value,
      "capacity": event.target.capacity.value
    }
    props.handlePaddockPost(paddock);

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" name="name"/>
      <input type="number" placeholder="Capacity" name="capacity"/>
      <select name="type">Type:
        <option value="herbivore">Herbivores Only</option>
        <option value="carnivore">Carnivores Only</option>
      </select>
      <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default PaddockForm;
