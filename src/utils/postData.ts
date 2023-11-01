export type Post = {
  id: number;
  imageUrl: string;
  category: string;
  title: string;
  author: string;
  date: string;
  featured?: boolean;
  content?: string;
};

export const posts: Post[] = [
  {
    id: 1,
    imageUrl: "images/post-image1.png",
    category: "TOURISM",
    title: "One of Saturn’s largest rings may be newer than anyone",
    author: "Rickie Baroch",
    date: "October 26, 2023",
  },
  {
    id: 2,
    imageUrl: "images/post-image2.png",
    category: "SPORT",
    title: "One of Saturn’s largest rings may be newer than anyone",
    author: " Rickie Baroch",
    date: "October 26, 2023",
  },
  {
    id: 3,
    imageUrl: "images/post-image3.png",
    category: "FASHION",
    title: "One of Saturn’s largest rings may be newer than anyone",
    author: " Rickie Baroch",
    date: "October 26, 2023",
  },
  {
    id: 4,
    imageUrl: "images/post-image4.png",
    category: "FASHION",
    title: "One of Saturn’s largest rings may be newer than anyone",
    author: " Rickie Baroch",
    date: "October 26, 2023",
  },
  {
    id: 5,
    imageUrl: "images/post-image5.png",
    category: "CLOTHES",
    title: "One of Saturn’s largest rings may be newer than anyone",
    author: " Rickie Baroch",
    date: "October 26, 2023",
  },
  {
    id: 6,
    imageUrl: "images/post-image6.png",
    category: "TOURISM",
    title: "One of Saturn’s largest rings may be newer than anyone",
    author: " Rickie Baroch",
    date: "October 26, 2023",
  },
  {
    id: 7,
    imageUrl: "images/feat-post-main.png",
    category: "TOURISM",
    title: "One of Saturn’s largest rings may be newer than anyone",
    author: " Rickie Baroch",
    date: "October 26, 2023",
    featured: true,
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem",
  },
  {
    id: 8,
    imageUrl: "images/post-image3.png",
    category: "TOURISM",
    title: "One of Saturn’s largest rings may be newer than anyone",
    author: " Rickie Baroch",
    date: "October 26, 2023",
  },
  {
    id: 9,
    imageUrl: "images/post-image4.png",
    category: "SPORT",
    title: "One of Saturn’s largest rings may be newer than anyone",
    author: " Rickie Baroch",
    date: "October 26, 2023",
  },
  {
    id: 10,
    imageUrl: "images/post-image5.png",
    category: "FASHION",
    title: "One of Saturn’s largest rings may be newer than anyone",
    author: " Rickie Baroch",
    date: "October 26, 2023",
  },
  {
    id: 11,
    imageUrl: "images/post-image6.png",
    category: "FASHION",
    title: "One of Saturn’s largest rings may be newer than anyone",
    author: " Rickie Baroch",
    date: "October 26, 2023",
  },
];
