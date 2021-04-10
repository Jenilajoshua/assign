import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-leftd',
  templateUrl: './leftd.component.html',
  styleUrls: ['./leftd.component.css']
})
export class LeftdComponent implements OnInit {

  constructor() { }
  @Input() inp: string;
  ngOnInit(): void {
  }

}
