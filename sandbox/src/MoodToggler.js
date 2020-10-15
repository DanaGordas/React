import React, { useState } from 'react';

function MoodToggler() {
    const [isHappy, setIsHappy] = useState(true);
    const toggleIsHappy = () => setIsHappy(!isHappy);
    return(
        <div>
            <h2 
            style={{color: isHappy? 'green' : 'red'}} 
            onClick={toggleIsHappy}>{isHappy ? ":)" : ":(" }</h2>
        </div>
    )
}

export default MoodToggler;