import {Component, OnInit} from '@angular/core';
import {PostsService} from '../posts.service';
import {PostEntity} from '../post.entity';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public postsService: PostsService) {
  }

  ngOnInit() {
  }

  onDelete(post: PostEntity) {
    this.postsService.delete(post);
  }

}
