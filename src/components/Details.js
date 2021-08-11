import React from 'react'

export default function Details (props) {
    const { title, explanation, copyright } = props


    return (
        <div>
            <h3>{title}</h3>
            <div>
                <p>{explanation}</p>
            </div>
            <div><p>copyright: {copyright}</p></div>
        </div>
    )
}