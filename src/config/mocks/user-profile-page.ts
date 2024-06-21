import { faker } from '@faker-js/faker/locale/pt_BR';

export const user = {
  name: faker.person.fullName(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  avatar: faker.image.urlLoremFlickr({ category: 'animals' }),
  bio: faker.lorem.paragraph(),
  animal: faker.animal.type(),
  createdAt: new Date('02-02-2024'),
  techs: ['react', 'nextjs', 'typescript', 'tailwind', 'figma'] as const,
  badges: ['medal', 'firstPlace', 'aPlus'] as const,
};
