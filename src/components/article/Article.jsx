import React, { useState } from 'react'

const Article = (props) => {
    // state visada top level
    // 1-state dabartine reiksme 
    //2-metodas kurio pagalba keiciu state reiksme, 
    //atnaujinu 3-pradine state reiksme ([]), ('')
    
    const [count, setCount] = useState(0);

//console.log(props)
    return (
        <div>
            {/* kaip atvaizduojamas vienas straipsnis is data/data.js failo */}
            <h2>{props.propsData.key}</h2>
            <h3>{props.propsData.title}</h3>
            <p>{props.propsData.description}</p>
            <p>Patinka:  {count}</p>
            <button onClick={() => setCount(count + 1)}>Patinka straipsnis</button>
        </div>
    )
}

export default Article
