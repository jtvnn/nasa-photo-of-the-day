import React from 'react'

export default function Details (props) {
    const { title, explanation } = props


    return (
        <div>
            {title}
            <div>
                {explanation}
            </div>
        </div>
    )
}