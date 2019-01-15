import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostEntity} from '../post.entity';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const newPost = PostEntity.fromJson(form.value);
    this.postsService.add(newPost);
    form.resetForm();
  }

}
