import { Home, Swords, User } from 'lucide-react';

export const navLinks = [
  {
    label: 'Home',
    href: '/dashboard',
    icon: Home,
  },
  {
    label: 'Perfil',
    href: '/dashboard/profile',
    icon: User,
  },
  {
    label: 'Lista de Desafios',
    href: '/dashboard/challenges',
    icon: Swords,
  },
];
