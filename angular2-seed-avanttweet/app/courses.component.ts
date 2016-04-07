
import {Component} from 'angular2/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from './auto-grow.directive';
import {FavoriteComponent} from './favorite.component';

@Component({
  selector: 'courses',
  template: `<h2>courses</h2>
    {{title}}
    <input type="text" autoGrow/>
    <ul>
      <li *ngFor="#course of courses">
        <favorite
        [is-favorite]="isFavorite" (change)="onFavoriteChange($event)"></favorite>{{ course }}
      </li>
    </ul>
  `,
  providers: [CourseService],
  directives: [AutoGrowDirective, FavoriteComponent]

})
export class CoursesComponent{
  isFavorite = 'true'
  title = "The title of courses page";
  courses;

constructor(courseService: CourseService){
  this.courses = courseService.getCourses();
}

onFavoriteChange($event){
  console.log($event);
}

}
