export default function TodoList(props) {
    return(
        <sectin>
            <h1>Дела</h1>
            <table className="is-hoverable is-fullwidth">
                <tbody>
                    {props.list?.map(item => (
                        <tr key={item.key}>
                            <td>
                                {item.done ? <del> {item.title} </del> : item.title}
                            </td>
                            <td>
                                <button
                                    className="button is-success"
                                    title="выполнено"
                                    disabled={item.done}
                                    onClick={() => (props.setDone(item.key))}>
                                    &#9745;
                                </button>
                            </td>
                            <td>
                                <button
                                    className="button is-danger"
                                    title="Удалить"
                                    onClick={() => (props.del(item.key))}>
                                    &#9746;
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </sectin>
    )
}