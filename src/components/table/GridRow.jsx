import React from 'react';

function GridRow({first, second, third}) {
    return (
        <tr>
            {/* {console.log(props)} */}
            <td>{first}</td>
            <td>{second}</td>
            <td>{third}</td>
        </tr>
    )
}

export default GridRow