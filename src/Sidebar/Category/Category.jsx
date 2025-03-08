import { useContext } from "react";
import { CategoryContext } from "../../store/store";

import RadioInput from "../../components/RadioInput/RadioInput";

function Category() {

  const {category, setCategory} = useContext(CategoryContext);

  return (
    <section className='category-filter'>
      <h3>Category</h3>
      <RadioInput textLabel={"All"} name="category" onChange={setCategory} checked={category === "All"}/> 
      <RadioInput textLabel={"Sneakers"} name="category" onChange={setCategory} checked={category === "Sneakers"} /> 
      <RadioInput textLabel={"Flats"} name="category" onChange={setCategory} checked={category === "Flats"} /> 
      <RadioInput textLabel={"Sandals"} name="category" onChange={setCategory} checked={category === "Sandals"} /> 
      <RadioInput textLabel={"Heels"} name="category" onChange={setCategory} checked={category === "Heels"} />
    </section>
  )
}

export default Category;