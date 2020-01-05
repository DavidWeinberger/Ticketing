import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-displaysector',
  templateUrl: './displaysector.component.html',
  styleUrls: ['./displaysector.component.scss']
})
export class DisplaysectorComponent implements OnInit {
  @Input() sector: String;

  ngOnInit(): void {}
}
