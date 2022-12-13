import {Component, OnInit} from '@angular/core';
import {Customer} from "../../model/Customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerList: Customer[] = [];

  constructor() {
    this.customerList.push({
      id: 1,
      name: "Tuấn Lê",
      dayOfBirth: new Date('1990/04/14'),
      address: "Da Nang",
      phone: "0766754226",
      email: "cumeo123@gmail.com",
      avatar: "/assets/customer/Samurai_Gen_Taisho_MP.png",
      description: "Oda Nobunaga là con trai của Oda Nobuhide, người đứng đầu gia tộc Oda Danjōtadaie (弾正忠家 Đạn chính Trung gia), và là lãnh chúa địa phương vùng Owari (phía tây tỉnh Aichi). Sau khi kế vị tộc trưởng Oda Danjōtadaie, Nobunaga đã tiêu diệt gia tộc Oda Yamatomori và gia tộc Oda Ise, những shugodai Owari, đồng thời loại bỏ em trai mình là Oda Nobuyuki, dần dần củng cố quyền kiểm soát tại vùng Owari."
    });
    this.customerList.push({
      id: 2,
      name: "Thái Khang",
      dayOfBirth: new Date('2019/07/21'),
      address: "Da Nang",
      phone: "0766757542",
      email: "cumeo124@gmail.com",
      avatar: "/assets/customer/Samurai_Cav_Mounted_Gunner.png",
      description: "Nobunaga cuối cùng được ca ngợi là một người trung thành và được tôn thờ như một vị thần trong thời kỳ Minh Trị. Sau Thế chiến II, Nobunaga được coi là một nhà đổi mới do tính mới trong các chính sách của ông. Tuy nhiên, hình ảnh này của Nobunaga với tư cách là một nhà đổi mới đang bị nghi ngờ, và trong những năm gần đây, giới học thuật lịch sử đã đánh giá lại danh tiếng của Nobunaga."
    });
    this.customerList.push({
      id: 3,
      name: "Thị Min",
      dayOfBirth: new Date('2021/01/14'),
      address: "Da Nang",
      phone: "0766775422",
      email: "cumeo126@gmail.com",
      avatar: "/assets/customer/Samurai_Gen_Taisho.png",
      description: "Về mặt chính sách, Nobunaga thành lập chính quyền của riêng mình dưới hình thức được Shogun Mạc phủ Muromachi ủy nhiệm “thiên hạ”. Quan điểm phổ biến là ông có lập trường hợp tác đối với Thiên hoàng và triều đình."
    });
    this.customerList.push({
      id: 5,
      name: "Thị Đầm",
      dayOfBirth: new Date('1969/12/14'),
      address: "Da Nang",
      phone: "0766754444",
      email: "cumeo122@gmail.com",
      avatar: "/assets/customer/Samurai_Inf_Bow_Hero.png"
    });
    this.customerList.push({
      id: 6,
      name: "Văn An",
      dayOfBirth: new Date('1990/09/10'),
      address: "Da Nang",
      phone: "0766754283",
      email: "cumeo1113@gmail.com",
      avatar: "/assets/customer/Samurai_Inf_Heavy_Gunner.png",
      description: "Nobunaga được Nobuhide trao cho thành Nagoya từ rất sớm và trở thành thành chủ thành Nagoya. Theo \"Nobunaga Koki\", Nobunaga có nhiều hành vi lập dị và được những người xung quanh gọi là \"đại ngốc\". Một số giải thích điều này có thể do Nobunaga mắc chứng rối loạn phát triển. Ngoài ra cũng nói rằng ông đã biết Matsudaira Takechiyo (sau này là Tokugawa Ieyasu), một con tin, khi Takechiyo còn là một đứa trẻ, nhưng không có sử sách nào chứng minh điều này, mặc dù không thể phủ nhận khả năng đó."
    });
    this.customerList.push({
      id: 7,
      name: "Văn Bình",
      dayOfBirth: new Date('1990/09/10'),
      address: "Da Nang",
      phone: "0766756676",
      email: "cumeo173@gmail.com",
      avatar: "/assets/customer/Samurai_Inf_Matchlock_Samurai_Hero.png"
    }); this.customerList.push({
      id: 8,
      name: "Thái Việt",
      dayOfBirth: new Date('1992/07/10'),
      address: "Da Nang",
      phone: "0765211276",
      email: "cumeo25@gmail.com",
      avatar: "/assets/customer/Samurai_Cav_Donderbuss_Cavalry.png",
      description:"Takeda Shingen (tiếng Nhật: 武田信玄, Vũ Điền Tín Huyền; 1521–1573) là một lãnh chúa (daimyo) của vùng Kai và vùng Shinano trong thời Chiến Quốc của Nhật Bản. Được mệnh danh là  Mãnh hổ xứ Kai\", Takeda Shingen là một trong những lãnh chúa mạnh nhất giai đoạn cuối thời Chiến Quốc"
    });
  };

  customerSelect: Customer = {};

  ngOnInit(): void {
  }


}
