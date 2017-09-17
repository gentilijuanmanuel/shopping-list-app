import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pollo con arroz', 'Tiempo promedio de cocción: 1 hs.', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Arroz-con-Pollo.jpg'),
    new Recipe('Fideos con salsa', 'Tiempo promedio de cocción: 30 min.', 'https://cdn.pixabay.com/photo/2014/10/22/15/20/noodles-498094_960_720.jpg'),
    new Recipe('Milanesa napolitana', 'Tiempo promedio de cocción: 1 hs.', 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Milanesa_napolitana.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
