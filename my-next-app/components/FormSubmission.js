import { useState } from "react";

export default function ForSubmission() {
    const [inputValue, setInputValue] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === "") {
            setMessage("Error: Input cannot be empty.");
        } else {
            setMessage("Form submitted successfully.");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Enter something"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} 
                />
                <button type="submit">Submit</button>
                </form>
                {message && <p>{message}</p>}
        </div>
    );
}
