import { Animal } from '../models/animal.model';
import { Espece } from '../models/espece.enum';

export const ANIMAUX: Animal[] = [
    { id: 1, nom: 'Dumbo', espece: Espece.ELEPHANT },
    { id: 2, nom: 'Bambi', espece: Espece.CERF },
    { id: 3, nom: 'Simba', espece: Espece.LION },
    { id: 4, nom: 'Felix', espece: Espece.CHAT },
    { id: 5, nom: 'Ecco', espece: Espece.DAUPHIN }
];