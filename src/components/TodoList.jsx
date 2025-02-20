import { useLoaderData, Link } from "react-router-dom"

export default function TodoList() {
    const list = useLoaderData();

    return(
        <section>
            <h1>Дела</h1>
            <table className="is-hoverable is-fullwidth">
                <tbody>
                    {list.map(item => (
                        <tr key={item.key}>
                            <td>
                                <Link to={`/${item.key}`}>
                                    {item.done ? <del> {item.title} </del> : item.title}
                                </Link>
                            </td>
                            <td>
                                <button
                                    className="button is-success"
                                    title="выполнено"
                                    disabled={item.done}
                                    >
                                    &#9745;
                                </button>
                            </td>
                            <td>
                                <button
                                    className="button is-danger"
                                    title="Удалить"
                                    >
                                    &#9746;
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}