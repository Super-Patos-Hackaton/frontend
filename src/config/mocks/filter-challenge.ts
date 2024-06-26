import { Item } from '@/components/ui/combobox';

export const sort: Item[] = [
  { label: 'Mais recente', value: 'maisRecente', comboBoxCleaner: false },
  { label: 'Mais antigo', value: 'maisAntigo', comboBoxCleaner: false },
];

export const stacks: Item[] = [
  { label: 'JavaScript', value: 'javascript', comboBoxCleaner: false },
  { label: 'TypeScript', value: 'typescript', comboBoxCleaner: false },
  { label: 'Figma', value: 'figma', comboBoxCleaner: false },
  { label: 'Java', value: 'java', comboBoxCleaner: false },
];

export const difficulty: Item[] = [
  { label: 'Fácil', value: 'facil', comboBoxCleaner: false },
  { label: 'Difícil', value: 'dificil', comboBoxCleaner: false },
  { label: 'Avançado', value: 'avancado', comboBoxCleaner: false },
  { label: 'Expert', value: 'expert', comboBoxCleaner: false },
];
