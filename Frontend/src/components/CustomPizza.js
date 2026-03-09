import React, {useState} from "react"

function CustomPizza(){

const [base,setBase]=useState("")
const [sauce,setSauce]=useState("")
const [cheese,setCheese]=useState("")

const order=()=>{

alert("Pizza Order Created")

}

return(

<div>

<h2>Create Custom Pizza</h2>

<select onChange={(e)=>setBase(e.target.value)}>
<option>Thin Crust</option>
<option>Cheese Burst</option>
<option>Whole Wheat</option>
<option>Pan Base</option>
<option>Classic</option>
</select>

<select onChange={(e)=>setSauce(e.target.value)}>
<option>Tomato</option>
<option>BBQ</option>
<option>Garlic</option>
<option>Pesto</option>
<option>White Sauce</option>
</select>

<select onChange={(e)=>setCheese(e.target.value)}>
<option>Mozzarella</option>
<option>Cheddar</option>
<option>Parmesan</option>
</select>

<button onClick={order}>
Order Pizza
</button>

</div>

)

}

export default CustomPizza
