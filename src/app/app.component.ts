import { Component, OnInit } from '@angular/core';
import { Observable, interval, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	public value$: Observable<number>;

	ngOnInit() {
		this.value$ = interval(1000).pipe(
			map(() => Math.random() * 120)
		);
	}

}
