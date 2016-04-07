import {Component} from 'angular2/core';
import {AuthorService} from './author.service';
import {LikeComponent} from './like.component';

@Component({
  selector: "authors",
  template: `<h2>Authors</h2>
  {{title}}
  <ul>
    <li *ngFor="#author of authors">
      <like [totalLikes]="author.totalLikes" [iLike]="author.iLike"></like> {{ author.name }}
    </li>
  </ul>
  `,
  providers: [AuthorService],
  directives: [LikeComponent]
}

)
export class AuthorsComponent{

  title = "La liste des auteurs";
  authors ;


 constructor(authorService: AuthorService){
   this.authors = authorService.getAuthors();
 }

}
