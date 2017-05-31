import { Component, OnChanges, Input} from '@angular/core';

@Component({
	selector : 'ml-star',
	templateUrl : 'app/shared/star.component.html',
	styleUrls : ['app/shared/star.component.css']
});
@Input() rating : number;

export class StarComponent implements OnChanges{

	rating : number = 4;
	starWidth : number;
	ngOnChanges() : void(){
		this.starWidth = this.rating * 86/5;
	}	
}