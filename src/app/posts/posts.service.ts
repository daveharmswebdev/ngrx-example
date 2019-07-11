import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IConfig, IPosts } from './store/posts.reducer';
import { tap } from 'rxjs/operators';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) {}

  getPosts() {
    const url = 'https://jsonplaceholder.typicode.com/comments';

    return this.http.get<IPosts[]>(url).pipe(
      tap(posts => console.log('these are the posts in the service', posts))
    );
  }

  getConfig() {
    const url = 'https://my-json-server.typicode.com/daveharmswebdev/json-server/config';

    return this.http.get<IConfig>(url).pipe(
      tap(config => console.log('this is the config in the service', config))
    );
  }
}
