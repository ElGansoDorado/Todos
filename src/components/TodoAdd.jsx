import { useState } from "react"
import { useSubmit } from "react-router-dom";

export default function TodoAdd() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');

    const [errorTitle, setErrorTitle] = useState('');
    const [errorDesc, setErrorDesc] = useState('');
    const submit = useSubmit();

    const handleImageChange = evt => {
        const cFiles = evt.target.files;
        if (cFiles.length > 0) {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                setImage(fileReader.result);
            }
            fileReader.readAsDataURL(cFiles[0]);
        }
        else {
            setImage('');
        }
    }

    const handleFormReset = () => {
        setTitle('');
        setDesc('');
        setImage('');
    }

    const resetErrorMessages = () => {
        setErrorTitle('');
        setErrorDesc('');
    }

    const validate = () => {
        resetErrorMessages();
        if (!title) {
            setErrorTitle('Заголовок не указан');
            return false;
        }
        if (!desc) {
            setErrorDesc("У дела нет описания");
            return false;
        }
        return true;
    };

    const handleFormSubmit = evt => {
        evt.preventDefault();
        if (validate()) {
            submit({ title, desc, image },
                { action: '/add', method: 'post' });
        }
    }

    return (
        <section>
            <h1>Создание нового дела</h1>
            <form onSubmit={handleFormSubmit} onReset={handleFormReset}>
                <div className="field">
                    <label htmlFor="" className="label">Заголовок</label>
                    <div className="control">
                        <input
                            className="input"
                            value={title}
                            onChange={e => setTitle(e.target.value)} />
                    </div>
                    {errorTitle &&
                        <p className="help is-danger">
                            {errorTitle}
                        </p>
                    }
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
                    {errorDesc &&
                        <p className="help is-danger">
                            {errorDesc}
                        </p>
                    }
                </div>
                <div className="field">
                    <div className="file">
                        <label className="file-label">
                            <input
                                type="file"
                                className="file-input"
                                accept="image/*"
                                onChange={handleImageChange} />
                            <span className="file-cta">
                                <span className="file-label">
                                    Графическая иллюстрация...
                                </span>
                            </span>
                        </label>
                    </div>
                </div>
                <div className="field is-grouped is-grouped-right">
                    <div className="control">
                        <input
                            type="reset"
                            className="button is-warning is-light"
                            value="Сброс" />
                    </div>
                    <div className="control">
                        <input
                            type="submit"
                            className="button is-primary"
                            value="Создать дело" />
                    </div>
                </div>
            </form>
        </section>
    )
}