import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less']
})
export class BlogComponent implements OnInit {

  constructor() { }
    blogPosts = [
    {
      image: 'assets/s1.jpg',
      date: 'SEPT. 06, 2020',
      author: 'ADMIN',
      comments: 3,
      title: 'Best for any industrial & business solution'
    },
    {
      image: 'assets/s1.jpg',
      date: 'SEPT. 06, 2020',
      author: 'ADMIN',
      comments: 3,
      title: 'Best for any industrial & business solution'
    },
    {
      image: 'assets/s1.jpg',
      date: 'SEPT. 06, 2020',
      author: 'ADMIN',
      comments: 3,
      title: 'Best for any industrial & business solution'
    }
  ];

  ngOnInit(): void {
  }

}
