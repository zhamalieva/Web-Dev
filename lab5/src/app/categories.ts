export interface Category {
    id: number;
    name: string;
    linkImage:string;
  }

  export const categories = [
    {
      id: 1,
      name: 'Phones',
      linkImage:'https://i.pinimg.com/736x/43/d4/f1/43d4f1267bec131b249d1f13424cab00.jpg',
    },
    {
        id: 2,
        name: 'Computers',
        linkImage: 'https://cdn.create.vista.com/api/media/medium/201603038/stock-photo-selective-focus-digital-tablet-pinterest?token=',

    },
    {
        id:3,
        name: 'Household products',
        linkImage: 'https://i.pinimg.com/736x/d8/18/a7/d818a76a94a84f76d64ab4fa3c14e5c3.jpg',
      },
    {
      id:4,
      name:'Headphones',
      linkImage:'https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2017/12/apple-airpods-770__w770.jpg',
    }
  ]