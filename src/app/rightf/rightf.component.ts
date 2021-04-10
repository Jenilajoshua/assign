import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rightf',
  templateUrl: './rightf.component.html',
  styleUrls: ['./rightf.component.css']
})
export class RightfComponent implements OnInit {

  constructor() { }
  @Input() inp: string;
  ngOnInit(): void {
  }

}
