import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  id: string;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
