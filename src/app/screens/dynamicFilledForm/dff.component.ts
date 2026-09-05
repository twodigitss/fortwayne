import { Component, inject } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { DffService } from "./dff.service";

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  selector: 'app-dff',
  templateUrl: './dff.component.html',
})
export class DffComponent {
  dff = inject(DffService);

  constructor() {
    this.dff.llenarFormulario(this.dff.cosa, this.dff.cosa2, this.dff.cosa3);
    this.dff.llenarUsuarios(this.dff.cosa4);
  }
}
