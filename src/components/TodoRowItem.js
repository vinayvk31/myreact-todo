function TodoRowItem() {

    const rowNumber = 1;
    const rowDescription = 'Feed Dog';
    const rowAssigned = 'Vinay';
    
    return (
        <tr>
            <th scope="row">{rowNumber}</th>
            <td>{rowDescription}</td>
            <td>{rowAssigned}</td>
        </tr>
    )
}

export default TodoRowItem