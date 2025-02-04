import { useState } from "react";

export default function ToggleVisibility() {
    const [isVisible, setIsVisible] = useState(false);

    return (
    <div>
        <button onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? "Hide" : "Show"}
        </button>
        {isVisible && <p>This is the toggled text or component!</p>}
    </div>
    );
}