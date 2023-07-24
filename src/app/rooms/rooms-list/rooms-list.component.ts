import { RoomsList } from './../room';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
})
export class RoomsListComponent implements OnInit {
  @Input() rooms: RoomsList[] = [];
  ngOnInit(): void {}
}
