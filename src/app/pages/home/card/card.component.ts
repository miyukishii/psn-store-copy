import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  pictureCover: string = ""
  @Input()
  gameTitle: string = ""
  @Input()
  price: string = ""
  @Input()
  info: string = ""
  @Input()
  label: string = ""

  constructor() {}
  ngOnInit(): void {}
}

