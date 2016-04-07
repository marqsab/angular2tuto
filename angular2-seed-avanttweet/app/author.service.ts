

interface Author{

  name: string;
  ilike: boolean;
  totalLikes: number;

}

export class AuthorService {

getAuthors() : Author[] {


  return [
  {name: "auteur 1", ilike: false, totalLikes: 10},
  {name: "auteur 2" ,ilike: false, totalLikes: 5},
  {name: "auteur 3",ilike: true, totalLikes: 0}
];
}

}
