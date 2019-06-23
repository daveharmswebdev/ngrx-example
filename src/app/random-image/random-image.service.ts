import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { IPhoto } from './store/random-image.reducer';

@Injectable()
export class RandomImageService {

  constructor(private http: HttpClient) {}

  getImage(number): Observable<IPhoto> {
    return this.http.get<IPhoto>(`https://jsonplaceholder.typicode.com/photos/${number}`);
  }

}
