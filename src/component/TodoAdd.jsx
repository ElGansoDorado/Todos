import { useState } from "react"

export default function TodoAdd(props) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');

    const handleImageChange = evt => {
        const cFiles = evt.targer.files;
        if (cFiles.length > 0) {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                setImage(fileReader.result);
            }
            fileReader.readAsDataURL(cFiles[0]);
        }
        else {
            setImage('')
        }
    }

    const handleFormSubmit = evt => {
        evt.preventDefault();
        const newDeed = { title, desc, image, done: false };
        const date = new Date();
        newDeed.createdAt = date.toLocaleString();
        newDeed.key = date.getTime();
        props.add(newDeed);
        evt.target.reset();
    }

    const handleFormReset = () => {
        setTitle('');
        setDesc('');
        setImage('');
    }


    return (
        <section>
            <h1></h1>
            <form onSubmit={handleFormSubmit} onReset={handleFormReset}>
                <div className="field">
                    <label htmlFor="" className="label">Заголовок</label>
                    <div className="control">
                        <input
                            className="input"
                            value={title}
                            onChange={e => setTitle(e.target.value)} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Примечания</label>
                    <div className="controle">
                        <textarea
                            className="textarea"
                            value={desc}
                            onChange={e => setDesc(e.target.value)}>
                        </textarea>
                    </div>
                </div>
                <div className="field">
                    <div className="file">
                        <label className="file-label">
                            <input
                                type="file"
                                className="file-input"
                                accept="image/*"
                                onChange={handleImageChange}/>
                            <span className="file-label">
                                Графическая иллюстрация...
                            </span>
                        </label>
                    </div>
                </div>
                <div className="field is-grouped is-grouped-right">
                    <div className="control">
                        <input 
                            type="reset" 
                            className="button is-warning is-light"
                            value="Сброс"/>
                    </div>
                    <div className="control">
                        <input 
                            type="submit" 
                            className="button is-primary" 
                            value="Создать дело"/>
                    </div>
                </div>
            </form>
        </section>
    )
}