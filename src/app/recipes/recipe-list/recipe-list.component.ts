import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes:Recipe[]=[
   new Recipe('A Test Recipe','This is a Simply test','http://appsgeyser.com/blog/wp-content/uploads/2016/12/recipe-icon-6.png'),
   new Recipe('A Test Recipe','This is a Simply test','http://appsgeyser.com/blog/wp-content/uploads/2016/12/recipe-icon-6.png')
 ];
  constructor() { }

  ngOnInit() {
  }

}
