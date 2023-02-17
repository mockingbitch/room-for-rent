import Reactprops from 'react'

const Table = (props) => {
    const { list } = props;

    return (
        <>
            <ul>
                {list.map(item => (
                    <li key={item.id}> {item.title} </li>
                ))}
            </ul>
        </>
    )
}
export default Table