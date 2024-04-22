import Link from 'next/link';
import Header from '@/components/header';

export default function Home() {
  console.log('Home page rendered!')
  return (
    <main>
      <Header/>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        Check out the <Link href="/about">About page</Link> to learn more about us!
      </p>
    </main>
  );
}
