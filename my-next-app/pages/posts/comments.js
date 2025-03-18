import { useRouter } from 'next/router';

const Comments = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h2>Comments for Post ID: {id}</h2>
            <p>This is where the comments will be displayed.</p>
        </div>
    );
};

export default Comments;