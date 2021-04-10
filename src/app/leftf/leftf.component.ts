import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-leftf',
  templateUrl: './leftf.component.html',
  styleUrls: ['./leftf.component.css']
})
export class LeftfComponent implements OnInit {

  
  
    // @input decorator used to fetch the 
    // property from the parent component.
      
    @Input() inp: string;
        
      ngOnInit(): void {
      }
      
  }




