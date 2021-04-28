import React from 'react';

export const FeelterInput = props => {
    return <div className="fullNameInputCont">
        <label htmlFor={ props.htmlFor }>{props.label}</label>
        <input id={ props.id } type={ props.type } placeholder={ props.placeholder }></input>
    </div>
}