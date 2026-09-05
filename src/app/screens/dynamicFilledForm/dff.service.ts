import { Injectable } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
//origen
export type RelacionesInternas = {
    areaOPuesto: string,
    paraQueAreaOPuesto: string,
}

export type RelacionesExternas = {
    institucion: string,
    paraQueInstitucion: string,
}

export type FormUser = {
    nombre: string,
    email: string,
    edad: number,
}

@Injectable({providedIn: 'root'})
export class DffService {
  //uso
  cosa: RelacionesInternas[] = [
    { areaOPuesto: '1', paraQueAreaOPuesto: '1' },
    { areaOPuesto: '2', paraQueAreaOPuesto: '2' },
    { areaOPuesto: '7', paraQueAreaOPuesto: '7' },
  ];
  cosa2: RelacionesExternas[] = [
    { institucion: '1', paraQueInstitucion: '1' },
    { institucion: '2', paraQueInstitucion: '2' },
    { institucion: '3', paraQueInstitucion: '3' },
    { institucion: '4', paraQueInstitucion: '4' },
    { institucion: '5', paraQueInstitucion: '5' },
    { institucion: '6', paraQueInstitucion: '6' },
    { institucion: '7', paraQueInstitucion: '7' },
  ];
  cosa3: string = 'ejemplo';

  cosa4: FormUser[] = [
    { nombre: 'A', email: 'A.com', edad: 1 },
    { nombre: 'B', email: 'B.com', edad: 2 },
    { nombre: 'C', email: 'C.com', edad: 3 },

  ]

  formData = new FormGroup({
      internas: new FormArray([this.crearFilaInterna()]),
      externas: new FormArray([this.crearFilaExterna()]),
      nombre: new FormControl(''),
  });

  formUser = new FormGroup({
    externas: new FormArray([this.crearFilaUsuarios()]),
  });

  // ==================INTERNAS============================

  crearFilaInterna() {
      return new FormGroup({
          areaOPuesto: new FormControl(''),
          paraQueAreaOPuesto: new FormControl(''),
      });
  }


  crearFilaExterna() {
      return new FormGroup({
          institucion: new FormControl(''),
          paraQueInstitucion: new FormControl(''),
      });
  }


  crearFilaUsuarios() {
      return new FormGroup({
        nombre: new FormControl(''),
        email: new FormControl(''),
        edad: new FormControl(''),
      });
  }

  // ponytail: una sola función genérica en vez de una por cada FormArray
  llenarFormulario(internas: RelacionesInternas[], externas: RelacionesExternas[], nombre: string) {
      const toFormGroup = (obj: Record<string, any>) =>
          new FormGroup(Object.fromEntries(
              Object.entries(obj).map(([k, v]) => [k, new FormControl(v)])
          ));

      const fillArray = (fa: FormArray, items: Record<string, any>[]) => {
          fa.clear();
          items.forEach(item => fa.push(toFormGroup(item)));
      };

      fillArray(this.formData.controls.internas as FormArray, internas);
      fillArray(this.formData.controls.externas as FormArray, externas);
      this.formData.controls.nombre.setValue(nombre);
  }

  // ponytail: función separada para el form de usuarios
  llenarUsuarios(usuarios: FormUser[]) {
      const fa = this.formUser.controls.externas as FormArray;
      fa.clear();
      usuarios.forEach(u =>
        fa.push(
          new FormGroup(
            Object.fromEntries(
              Object.entries(u).map(([k, v]) => [k, new FormControl(v)])
            )
          )
        )
      );
  }
}
