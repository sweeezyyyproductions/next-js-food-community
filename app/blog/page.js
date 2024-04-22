import Link from 'next/link';

export default function BlogPage() {
    return (
        <main>
            <h1>Welcome to the Blog Page</h1>
            <p><Link href="/blog/post-1">This is the first blog post.
            
            </Link></p>
            <p><Link href="/blog/post-2">This is the second blog post.</Link></p>
        </main>
    );
}
