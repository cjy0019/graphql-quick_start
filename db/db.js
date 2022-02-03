export const people = [
  {
    id: '0',
    name: 'Leo Messi',
    age: 34,
    gender: 'male',
  },
  {
    id: '1',
    name: 'Cristiano Ronaldo',
    age: 34,
    gender: 'male',
  },
  {
    id: '2',
    name: 'Son HeungMin',
    age: 31,
    gender: 'male',
  },
  {
    id: '3',
    name: 'Park JiSung',
    age: 34,
    gender: 'male',
  },
  {
    id: '4',
    name: 'Joe Cole',
    age: 40,
    gender: 'male',
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => id === people.id);
  return filteredPeople[0];
};
