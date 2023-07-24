import { Component } from '@angular/core';
import { Room, RoomsList } from './room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent {
  hotelName = 'Hotel One';
  numberofRooms = 230;
  hideRooms = false;
  // availableRooms: 10,
  //   bookedRooms: 5,
  //   totalRooms: 20,
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  room: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20,
  };
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
