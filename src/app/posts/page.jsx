import Link from "next/link";

export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
};

const PostPage = async () => {
    const posts = await getPosts();
    return (
        <div className="grid grid-cols-4 gap-6 my-12">
            {posts.map((post) => (
                <div key={post.id} className="shadow p-4 bg-gray-50 space-y-1 flex flex-col justify-between">
                    <div>
                        <p className="text-lg font-bold uppercase">{post.title}</p>
                        <p>{post.body}</p>
                    </div>
                    <Link href={`/posts/${post.id}`} className="px-2 py-1 bg-gray-200 rounded-sm w-fit mt-4">Post Details</Link>
                </div>
            ))}
        </div>
    );
};

export default PostPage;