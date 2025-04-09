import { useTranslations } from 'next-intl';
import Hero from '../../src/components/Hero';

export default function HomePage() {
  const t = useTranslations('home');
  return (
    <div>
      <Hero />
    </div>
  );
} 