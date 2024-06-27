export type ChallengeLevel =
  | 'beginner'
  | 'intermediate'
  | 'advanced'
  | 'expert';

export const challengeLevels = {
  beginner: 'Iniciante',
  intermediate: 'Intermediário',
  advanced: 'Avançado',
  expert: 'Expert',
};

const startDate = new Date(2024, 11, 16);

const endDate = new Date(2024, 11, 20);

export const challenges = [
  {
    id: 1,
    title: 'Desafio #1',
    techs: ['HTML', 'CSS', 'JavaScript'],
    challengeLevel: 'beginner' as ChallengeLevel,
    isAnEvent: false,
    eventStartDate: startDate,
    eventEndDate: endDate,
    interfaceDescription:
      'Nam enim ipsum, ullamcorper bibendum ipsum sit amet, pellentesque sollicitudin mauris. Aenean aliquet hendrerit pharetra. Ut et ultrices odio.',
    description:
      'Criar uma página responsiva em HTML e CSS simulando uma página do Instagram usando apenas o Flexbox e os conceitos do mobile first.',
  },
  {
    id: 2,
    title: 'Desafio #2',
    techs: ['HTML', 'CSS', 'TypeScript'],
    challengeLevel: 'beginner' as ChallengeLevel,
    isAnEvent: false,
    eventStartDate: startDate,
    eventEndDate: endDate,
    interfaceDescription:
      'Nam enim ipsum, ullamcorper bibendum ipsum sit amet, pellentesque sollicitudin mauris. Aenean aliquet hendrerit pharetra. Ut et ultrices odio.',
    description:
      'Criar uma página responsiva em HTML e CSS simulando uma página do Instagram usando apenas o Flexbox e os conceitos do mobile first.',
  },
  {
    id: 3,
    title: 'Desafio #3',
    techs: ['HTML', 'CSS', 'JavaScript'],
    challengeLevel: 'beginner' as ChallengeLevel,
    isAnEvent: false,
    eventStartDate: startDate,
    eventEndDate: endDate,
    interfaceDescription:
      'Nam enim ipsum, ullamcorper bibendum ipsum sit amet, pellentesque sollicitudin mauris. Aenean aliquet hendrerit pharetra. Ut et ultrices odio.',
    description:
      'Criar um card com HTML e CSS para mostrar uma lista de produtos, contendo a imagem, o nome do produto e o preço.',
  },
  {
    id: 4,
    title: 'Desafio #4',
    techs: ['HTML', 'CSS', 'JavaScript'],
    challengeLevel: 'beginner' as ChallengeLevel,
    isAnEvent: false,
    eventStartDate: startDate,
    eventEndDate: endDate,
    interfaceDescription:
      'Nam enim ipsum, ullamcorper bibendum ipsum sit amet, pellentesque sollicitudin mauris. Aenean aliquet hendrerit pharetra. Ut et ultrices odio.',
    description:
      'Criar a landing page de uma loja de roupas, contendo uma lista de produtos, uma seção de preços e uma seção de clientes.',
  },
  {
    id: 5,
    title: 'Desafio #5',
    techs: ['HTML', 'CSS', 'JavaScript', 'React'],
    challengeLevel: 'intermediate' as ChallengeLevel,
    isAnEvent: false,
    eventStartDate: startDate,
    eventEndDate: endDate,
    interfaceDescription:
      'Nam enim ipsum, ullamcorper bibendum ipsum sit amet, pellentesque sollicitudin mauris. Aenean aliquet hendrerit pharetra. Ut et ultrices odio.',
    description:
      'Criar uma página responsiva em HTML e CSS simulando uma página do Instagram usando apenas o Flexbox e os conceitos do mobile first.',
  },
  {
    id: 6,
    title: 'Evento de Natal',
    techs: ['HTML', 'CSS', 'JavaScript', 'React'],
    challengeLevel: 'intermediate' as ChallengeLevel,
    isAnEvent: true,
    eventStartDate: startDate,
    eventEndDate: endDate,
    interfaceDescription:
      'Nam enim ipsum, ullamcorper bibendum ipsum sit amet, pellentesque sollicitudin mauris. Aenean aliquet hendrerit pharetra. Ut et ultrices odio.',
    description:
      'Criar uma página responsiva em HTML e CSS simulando uma página do Instagram usando apenas o Flexbox e os conceitos do mobile first.',
  },
];
