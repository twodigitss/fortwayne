import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CategoryCard } from "../components/category-card/card";

@Component({
  standalone: true,
  selector: 'finapp-home',
  templateUrl: 'scr1.html',
  imports: [
    CommonModule,
    CategoryCard,
  ]
})
export default class finappHome {

}
