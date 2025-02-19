import { useState, useRef } from "react";

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const passwordRef = useRef();
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!name.trim()) newErrors.name = "Name is required";
        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            newErrors.email = "Invalid email format";
        }
        if (!passwordRef.current.value || passwordRef.current.value.length < 6) {
            newErrors.password = "{Password must be at least 6 characters.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Form submitted successfully!");
            console.log({
                name,
                email,
                password: passwordRef.current.value
            });
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px"}}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                    </div>
                <div>
                <label>Password:</label>
                <input type="password" ref={passwordRef} />
                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                </div>
                <button type="Submit" style={{ marginTop: "10px", padding: "8px", cursor: "pointer" }}>Register</button>
                </form>
                </div>
    );
}