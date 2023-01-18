import React from 'react';

function GridHead(props) {
    return (
        <tr>
            <th>{props.columnOne}</th>
            <th>Director</th>
            <th>Senior Technician</th>
        </tr>
    )
}

export default GridHead