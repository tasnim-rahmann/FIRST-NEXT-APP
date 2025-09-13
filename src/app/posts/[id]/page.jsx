export const getPosts = async (postId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return res.json();
};

const SinglePost = async ({ params }) => {
    const { id } = params;
    const singlePost = await getPosts(id);

    return (
        <div className="max-w-7xl mx-auto my-12">
            <div className="shadow p-4 bg-gray-50 space-y-1 flex flex-col justify-between">
                <p className="text-lg font-bold uppercase">{singlePost.title}</p>
                <p>{singlePost.body}</p>
            </div>
        </div>
    );
};

export default SinglePost;
