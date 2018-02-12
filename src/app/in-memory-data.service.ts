import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const teams = [
      { id: 11, name: 'Mr. Nice', category: 'MensOpen', clubName: 'Ipswixh JAFFA RC', complete: true, members: { name: 'bob',  ageCategoryCode: 'MV40'} },
      { id: 12, name: 'Narco', category: 'Mixed', clubName: 'Harwich Road Runners', complete: true  },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {teams};
  }
}