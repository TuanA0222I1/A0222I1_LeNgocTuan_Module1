import {Injectable} from '@angular/core';
import {AttachService} from "../../model/contract/AttachService";

@Injectable({
  providedIn: 'root'
})
export class AttachServiceService {
  attachs: AttachService[] = [];

  constructor() {
    this.attachs.push({
      id: 1,
      name: "Karaoke",
      cost: 1000,
      unit: "giờ",
      status: "tiện nghi, hiện tại"
    })
    this.attachs.push({
      id: 2,
      name: "Thuê xe máy",
      cost: 10,
      unit: "chiếc",
      status: "hỏng 1 xe"
    })
    this.attachs.push({
      id: 3,
      name: "Thuê xe đạp",
      cost: 20,
      unit: "chiếc",
      status: "tốt"
    })
    this.attachs.push({
      id: 4,
      name: "Buffet buổi sáng",
      cost: 150,
      unit: "suất",
      status: " đầy đủ đồ ăn, tráng miệng "
    })
    this.attachs.push({
      id: 5,
      name: "Buffet buổi trưa",
      cost: 130,
      unit: "suất",
      status: " đầy đủ đồ ăn, tráng miệng "
    })
    this.attachs.push({
      id: 6,
      name: "Buffet buổi tối",
      cost: 160,
      unit: "suất",
      status: " đầy đủ đồ ăn, tráng miệng "
    })
  }

  findAll(): AttachService[] {
    return this.attachs;
  }
}
