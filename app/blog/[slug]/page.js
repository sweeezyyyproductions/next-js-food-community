export default function BlogPostPage({ params }) {
    return (
        <main>
            <h1>This is the first blog post</h1>
            <p>{params.slug}</p>
        </main>
    );
}