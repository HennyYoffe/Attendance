import React from 'react';

export default function PersonRow({ person, onHereToday }) {
    return (
        <tr>
            <td><input checked={person.hereToday} onChange={() => onHereToday(person)} type="checkbox" className="form-control" /></td>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
        </tr>
    )
}
