import React, { useState } from 'react'
import { SKILL_LIST } from './consts.js'

const Skills = ({attributes}) => {
    const intelligenceModifier = attributes['Intelligence']
    const maxSkillPoints = 10 + (4 * intelligenceModifier)

    const [skillPoints, setSkillPoints] = useState({})

    const initializeSkillPoints = () => {
        const initialSkillPoints = {}
        SKILL_LIST.forEach(skill => {
            initialSkillPoints[skill.name] = 0
        })
        setSkillPoints(initialSkillPoints)
    }

    useState(() => {
        initializeSkillPoints()
    }, [])

    const incrementSkillPoints = (skillName) => {
        if (skillPoints[skillName] <= maxSkillPoints) {
            setSkillPoints(prev => ({
                ...prev,
                [skillName]: prev[skillName] + 1,
            }))
        }
    }

    const decrementSkillPoints = (skillName) => {
        if (skillPoints[skillName] > 0) {
            setSkillPoints(prev => ({
                ...prev,
                [skillName]: prev[skillName] - 1,
            }))
        }
    }

    const calculateTotalSkillValue = (skillName) => {
        const points = skillPoints[skillName] || 0
        const attributeModifier = attributes[SKILL_LIST.find(skill => skill.name === skillName).attributeModifier]
        return points + attributeModifier
    }

    const calculateAbilityModifier = (value) => {
        if (value >= 10) {
            return Math.floor((value - 10) / 2)
        } else {
            return Math.ceil((value - 10) / 2)
        }
    }

    return (
        <div className='section'>
            <h2>Skills</h2>
            {SKILL_LIST.map(skill => (
                <div key={skill.name}>
                    {skill.name} - points: {skillPoints[skill.name]}
                    <button onClick={() => incrementSkillPoints(skill.name)}>+</button>
                    <button onClick={() => decrementSkillPoints(skill.name)}>-</button>
                    modifier ({skill.attributeModifier}): {calculateAbilityModifier(attributes[skill.attributeModifier])}
                    total: {calculateTotalSkillValue(skill.name)}
                </div>
            ))}
        </div>
    )
}

export default Skills