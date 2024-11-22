import { SyntheticEvent, useState } from 'react';
import { Movie } from '../type';

interface addMovieProps {
    onMovieAdd: (movie : Movie) => void;
}

const addMoviePage = ({onMovieAdd} : addMovieProps) => {
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [duration, setDuration] = useState(0);
    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");
    const [budget, setBudget] = useState(0);



    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        onMovieAdd({
            title,
            director,
            duration,
            url,
            description,
            budget
        });
        setTitle("");
        setDirector("");
        setDuration(0);
        setUrl("");
        setDescription("");
        setBudget(0);
    };

    const handleTitleChange = (e: SyntheticEvent) => {
        const titleInput = e.target as HTMLInputElement;
        setTitle(titleInput.value);
    };

    const handleDirectorChange = (e: SyntheticEvent) => {
        const directorInput = e.target as HTMLInputElement;
        setDirector(directorInput.value);
    };

    const handleDurationChange = (e: SyntheticEvent) => {
        const durationInput = e.target as HTMLInputElement;
        const value = parseFloat(durationInput.value);
        setDuration(value);
    };

    const handleUrlChange = (e: SyntheticEvent) => {
        const urlInput = e.target as HTMLInputElement;
        setUrl(urlInput.value);
    };

    const handleDescriptionChange = (e: SyntheticEvent) => {
        const descriptionInput = e.target as HTMLInputElement;
        setDescription(descriptionInput.value);
    };

    const handleBudgetChange = (e: SyntheticEvent) => {
        const budgetInput = e.target as HTMLInputElement;
        const value = parseFloat(budgetInput.value);
        setBudget(value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={handleTitleChange} />
            </label>
            <label>
                Director:
                <input type="text" value={director} onChange={handleDirectorChange} />
            </label>
            <label>
                Duration:
                <input type="number" value={duration} onChange={handleDurationChange} />
            </label>
            <label>
                URL:
                <input type="text" value={url} onChange={handleUrlChange} />
            </label>
            <label>
                Description:
                <input type="text" value={description} onChange={handleDescriptionChange} />
            </label>
            <label>
                Budget:
                <input type="number" value={budget} onChange={handleBudgetChange} />
            </label>
            <button type="submit">Add</button>
        </form>
    );
};

export default addMoviePage;