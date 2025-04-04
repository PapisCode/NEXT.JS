export default function HeavyDetails() {
    const start = Date.now();
    while (Date.now() - start < 2000) {}
    
    return (
        <div>
            <h3>Heavy Details</h3>
            <p>This component was dynamically loaded!</p>
        </div>
    );
}