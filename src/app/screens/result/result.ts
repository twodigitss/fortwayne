import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.html',
})
export class Result {
  readonly type = input<'success' | 'failure'>('success');

  protected readonly isSuccess = computed(() => this.type() === 'success');
  protected readonly title = computed(() =>
    this.isSuccess() ? 'Operación exitosa' : 'Operación fallida',
  );
  protected readonly message = computed(() =>
    this.isSuccess()
      ? 'La solicitud fue procesada correctamente.'
      : 'Hubo un error al procesar la solicitud.',
  );
}
