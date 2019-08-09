import React from 'react';

export default function HTPersonRow({ person, onHereNow }) {
    return (<tr>    
                <td><input checked={person.hereNow} onChange={() => onHereNow(person)} type="checkbox" className="form-control" /></td>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>            
    </tr>
    )
}