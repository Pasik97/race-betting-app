import { id } from './paths';

export const replaceId = (path: string, idToInsert: string) => {
   const idPlaceholder = id.slice(1, id.length);

   return path.replace(idPlaceholder, idToInsert.toString());
};
