import React from "react"

const board = ({value, index, displayFunction }) => {
    return (
        
            <div className="tiles" onClick={()=>displayFunction(index)}>
                {value}
            </div>
            
        
    )
}

export default board