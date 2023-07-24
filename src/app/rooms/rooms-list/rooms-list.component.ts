import { RoomsList } from './../room';
import {
  Component,
  Input,
  Output,
  OnInit,
  OnChanges,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnInit, OnChanges {
  @Input() rooms: RoomsList[] = [];
  @Input() title: String = '';
  @Output() selectedRoom = new EventEmitter<RoomsList>();
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }
  selectRoom(room: RoomsList) {
    this.selectedRoom.emit(room);
  }
}
