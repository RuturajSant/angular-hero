import { Component, DoCheck, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomsList } from './room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements DoCheck {
  ngDoCheck(): void {
    throw new Error('Method not implemented.');
  }
  hotelName = 'Hotel One';
  numberofRooms = 230;
  hideRooms = false;
  selectedRoom!: RoomsList;
  // availableRooms: 10,
  //   bookedRooms: 5,
  //   totalRooms: 20,
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  selectRoom(room: RoomsList) {
    this.selectedRoom = room;
  }
  addRoom() {
    const room: RoomsList = {
      roomType: 'Deluxe',
      amenities: 'Wifi',
      price: 100,
      photos: 'https://picsum.photos/200',
      checkInTime: new Date('11-Nov-2023'),
      checkOutTime: new Date('15-Nov-2023'),
      roomNumber: 4,
    };
    this.roomList = [...this.roomList, room];
    console.log(this.roomList);
  }
  title: String = 'Rooms List';
  room: Room = {
    availableRooms: 3,
    bookedRooms: 5,
    totalRooms: 230,
  };
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  roomList: RoomsList[] = [
    {
      roomType: 'Deluxe',
      amenities: 'Wifi',
      price: 100,
      photos: 'https://picsum.photos/200',
      checkInTime: new Date('11-Nov-2023'),
      checkOutTime: new Date('15-Nov-2023'),
      roomNumber: 1,
    },
    {
      roomType: 'Deluxe',
      amenities: 'Wifi',
      price: 300,
      photos: 'https://picsum.photos/200',
      checkInTime: new Date('10-Nov-2023'),
      checkOutTime: new Date('25-Nov-2023'),
      roomNumber: 2,
    },
    {
      roomType: 'Private Suite',
      amenities: 'Wifi',
      price: 500,
      photos: 'https://picsum.photos/200',
      checkInTime: new Date('11-Nov-2023'),
      checkOutTime: new Date('15-Nov-2023'),
      roomNumber: 3,
    },
  ];
}
