import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IncreaseSpeed, DecreaseSpeed, FetchImage } from '../store/random-images.actions';
import { Observable, Subscription, interval, of } from 'rxjs';
import { selectSpeed } from '../store/random-image.selectors';
import { AppState } from 'src/app/reducers';
import { RandomImageService } from '../random-image.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-random-image',
  templateUrl: './random-image.component.html',
  styleUrls: ['./random-image.component.scss']
})
export class RandomImageComponent implements OnInit, OnDestroy {
  public speed$: Observable<number>;
  private speedSubscription: Subscription;
  public count = 0;

  constructor(private store: Store<AppState>, private service: RandomImageService) { }

  ngOnInit() {
    this.speed$ = this.store.pipe(select(selectSpeed));
    this.service.getImage(this.randomNumber()).subscribe(image => console.log(image));

    this.speedSubscription = this.speed$.pipe(
      switchMap(speed => speed !== 0 ? interval(speed * 1000) : of())
    ).subscribe(() => {
      this.count++;
      if (this.count % 2 === 0) {
        console.log('call a new image');
        this.store.dispatch(new FetchImage(this.randomNumber()));
      }
    });
  }

  ngOnDestroy() {
    this.speedSubscription.unsubscribe();
  }

  increaseSpeed() {
    this.store.dispatch(new IncreaseSpeed());
  }

  decreaseSpeed() {
    this.store.dispatch(new DecreaseSpeed());
  }

  randomNumber() {
    const randomNumber = Math.floor(Math.random() * 100);
    return randomNumber;
  }

}
