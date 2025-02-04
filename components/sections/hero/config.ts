import { Hero } from '@/types/hero';
import { metadata as meta } from '@/app/config';

const hero: Hero = {
  name: meta.author.name,
  label: meta.author.label,
  description: 'I am a digital marketing specialist with a passion for creating effective online marketing strategies. Welcome to my portfolio.'
};

export { hero };
