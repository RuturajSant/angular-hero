export interface Room {
  availableRooms?: number;
  bookedRooms?: number;
  totalRooms?: number;
}

export interface RoomsList {
  roomType: string;
  amenities: string;
  price: number;
  photos: string;
  checkInTime: Date;
  checkOutTime: Date;
  roomNumber: number;
}
