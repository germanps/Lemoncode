export interface Lookup {
  id: string;
  name: string;
}

export const createEmptyLookup = (): Lookup => ({
  id: '',
  name: '',
});

export const STATUS = {
  Alive: 'green',
  Dead: 'red',
  unknown: 'gray',
};
