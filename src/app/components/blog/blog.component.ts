import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";


@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public items$: any;

  constructor(private service: DataService) {
    this.getAll();
  }

  ngOnInit(): void {
  }
  getAll() {
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }

  }
