import React, { useState } from 'react'
import { ATTRIBUTE_LIST, CLASS_LIST } from './consts.js'

const Classes = ({attributes}) => {

    const [selectedClass, setSelectedClass] = useState(null)

    return (
        <div className='section'>
            <h2>Classes</h2>
            {Object.keys(CLASS_LIST).map(className => {
                const classRequirements = CLASS_LIST[className]

                let meetsRequirements = true
                for (const attr of ATTRIBUTE_LIST) {
                    if (attributes[attr] < classRequirements[attr]) {
                        meetsRequirements = false
                        break
                    }
                }
                return (
                    <div
                      key={className}
                      style={{ color: meetsRequirements ? 'green' : 'red' }}
                      onClick={() => setSelectedClass(className)}
                    >
                        {className}
                    </div>
                )})}

            {selectedClass && (
                <div className='section'>
                    <h2>{selectedClass} Requirements</h2>
                    {ATTRIBUTE_LIST.map(attribute => (
                        <div>
                            {attribute}: {CLASS_LIST[selectedClass][attribute]}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Classes