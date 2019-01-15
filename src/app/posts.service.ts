import {Injectable} from '@angular/core';
import {PostEntity} from './post.entity';
import {HttpClient} from '@angular/common/http';
import {first, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  list: PostEntity[] = [];

  constructor(private http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
      tap(x => console.log(x)),
      map((list: object[]) => list.map((e: object) => PostEntity.fromJson(e))),
      first()
    ).subscribe(
      (list: PostEntity[]) => this.list = list
    );
  }

  add(post: PostEntity) {
    this.http.post('https://jsonplaceholder.typicode.com/posts', post).pipe(
      tap(x => console.log(x)),
      map((e: object) => PostEntity.fromJson(e)),
    ).subscribe(
      (item: PostEntity) => this.list.unshift(item)
    );
  }

  delete(post: PostEntity) {
    this.http.delete('https://jsonplaceholder.typicode.com/posts/' + post.id).pipe(
    ).subscribe(
      () => {
        const index = this.list.indexOf(post);
        if (index !== -1) {
          this.list.splice(index, 1);
        }
      }
    );
  }
}
