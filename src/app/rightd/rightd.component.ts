import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-rightd',
  templateUrl: './rightd.component.html',
  styleUrls: ['./rightd.component.css']
})
export class RightdComponent implements OnInit {

  constructor() { }
  @Input() inp: string;
  ngOnInit(): void {
  }

}
