import { Item } from '@/components/ui/combobox';

export const sort: Item[] = [
  { label: 'Mais recente', value: 'asc' },
  { label: 'Mais antigo', value: 'desc' },
];

export const stacks: Item[] = [
  { label: 'JavaScript', value: 'javascript' },
  { label: 'TypeScript', value: 'typescript' },
  { label: 'Figma', value: 'figma' },
  { label: 'Java', value: 'java' },
];

export const difficulty: Item[] = [
  { label: 'Iniciante', value: 'beginner' },
  { label: 'Intermediário', value: 'intermediate' },
  { label: 'Avançado', value: 'advanced' },
  { label: 'Expert', value: 'expert' },
];
