export interface Notice {
  id?: any;
  title?: string;
  noticeType: string;
  noticeDetails: string;
  createdDate: Date;
  notableDate: Date;
}

export const notices: Notice[] = [
  {
    id: '63274',
    title: 'Notice Of Event',
    noticeType: 'GENERAL',
    noticeDetails:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque autem iure officia, temporibus assumenda rem neque iste facilis corrupti modi ab quia perspiciatis provident quasi ut earum minus recusandae, quos cupiditate nam incidunt voluptates molestiae ipsum. A atque suscipit ab necessitatibus laudantium, iste quo illo expedita accusamus maiores corporis provident ex reprehenderit inventore doloremque aliquid eligendi. Non aspernatur, eum quae tempora error, qui nihil accusantium possimus, consectetur ducimus modi alias magni iure rerum! Ullam facilis eligendi, minus culpa, vero reprehenderit debitis officia praesentium reiciendis placeat maxime ipsum sit quasi asperiores. Nostrum accusamus quas temporibus corrupti veritatis quaerat ducimus aut officiis!',
    createdDate: new Date(),
    notableDate: new Date(),
  },
  {
    id: '3248',
    title: 'Departmental Notice',
    noticeType: 'DEPARTMENT',
    noticeDetails:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque autem iure officia, temporibus assumenda rem neque iste facilis corrupti modi ab quia perspiciatis provident quasi ut earum minus recusandae, quos cupiditate nam incidunt voluptates molestiae ipsum. A atque suscipit ab necessitatibus laudantium, iste quo illo expedita accusamus maiores corporis provident ex reprehenderit inventore doloremque aliquid eligendi. Non aspernatur, eum quae tempora error, qui nihil accusantium possimus, consectetur ducimus modi alias magni iure rerum! Ullam facilis eligendi, minus culpa, vero reprehenderit debitis officia praesentium reiciendis placeat maxime ipsum sit quasi asperiores. Nostrum accusamus quas temporibus corrupti veritatis quaerat ducimus aut officiis!',
    createdDate: new Date(),
    notableDate: new Date(),
  },
  {
    id: '98237',
    title: 'Privilaged notice on item',
    noticeType: 'PRIVATE',
    noticeDetails:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque autem iure officia, temporibus assumenda rem neque iste facilis corrupti modi ab quia perspiciatis provident quasi ut earum minus recusandae, quos cupiditate nam incidunt voluptates molestiae ipsum. A atque suscipit ab necessitatibus laudantium, iste quo illo expedita accusamus maiores corporis provident ex reprehenderit inventore doloremque aliquid eligendi. Non aspernatur, eum quae tempora error, qui nihil accusantium possimus, consectetur ducimus modi alias magni iure rerum! Ullam facilis eligendi, minus culpa, vero reprehenderit debitis officia praesentium reiciendis placeat maxime ipsum sit quasi asperiores. Nostrum accusamus quas temporibus corrupti veritatis quaerat ducimus aut officiis!',
    createdDate: new Date(),
    notableDate: new Date(),
  },
  {
    id: '64773',
    title: 'Assembly line notice',
    noticeType: 'GENERAL',
    noticeDetails:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque autem iure officia, temporibus assumenda rem neque iste facilis corrupti modi ab quia perspiciatis provident quasi ut earum minus recusandae, quos cupiditate nam incidunt voluptates molestiae ipsum. A atque suscipit ab necessitatibus laudantium, iste quo illo expedita accusamus maiores corporis provident ex reprehenderit inventore doloremque aliquid eligendi. Non aspernatur, eum quae tempora error, qui nihil accusantium possimus, consectetur ducimus modi alias magni iure rerum! Ullam facilis eligendi, minus culpa, vero reprehenderit debitis officia praesentium reiciendis placeat maxime ipsum sit quasi asperiores. Nostrum accusamus quas temporibus corrupti veritatis quaerat ducimus aut officiis!',
    createdDate: new Date(),
    notableDate: new Date(),
  },
];
