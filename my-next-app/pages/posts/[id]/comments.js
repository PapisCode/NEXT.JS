import { useRouter } from 'next/router';

const Comments = () => {
    const router = useRouter();
    const { id } = router.query;

    // Coments data
    const commentsData = {
        1: ["Drake is the greatest artist of our generation"],
        2: ["CyberSecuirty is the career objective"],
        3: ["Steph Curry is the greatest Point Guard to ever play the game"]
    };

    const comments = commentsData[id] || ["No comments yet"]

    return (
        <div>
            <h2>Comments for Post ID: {id}</h2>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
        </div>
    );
};

export default Comments;