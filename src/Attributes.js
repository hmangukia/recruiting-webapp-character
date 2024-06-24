import React from 'react'
import { ATTRIBUTE_LIST } from './consts.js'

const Attributes = ({attributes, setAttributes}) => {

    const updateAttribute = (attribute, value) => {
        setAttributes(prevAttributes => ({
            ...prevAttributes,
            [attribute]: value,
        }))
    }
    return (
        <div className='section'>
            <h2>Attributes</h2>
            {ATTRIBUTE_LIST.map(attribute => (
                <div key={attribute}>
                    {attribute} : {attributes[attribute]}
                    <button onClick={() => updateAttribute(attribute, attributes[attribute] - 1)}>
                       -
                    </button>
                    <button onClick={() => updateAttribute(attribute, attributes[attribute] + 1)}>
                       +
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Attributes