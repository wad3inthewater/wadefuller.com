import CardExample from "@/components/CardNav/CardExample";
import Navigation from '@/components/Navigation/Navigation';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-900">
      <h1 className="text-4xl font-bold text-white mb-8">
        Motion Card Examples
      </h1>
      <p className="text-slate-300 mb-12 text-center max-w-2xl px-4">
        Interactive examples showcasing 3D card animations, hover effects, and
        flip transitions. Use these patterns as a foundation for your card
        navigation.
      </p>
      <CardExample />
      <Navigation />
    </main>
  );
}
