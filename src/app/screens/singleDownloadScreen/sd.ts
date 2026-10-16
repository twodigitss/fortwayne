import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

type state = 'idle' | 'ready' | 'loading' | 'done'

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'wea',
  templateUrl: 'sd.html',
  imports: [CommonModule, FormsModule]
})
export default class wea {
  appState = signal<state>('idle')
  opcionSeleccionada = signal<string|undefined>(undefined);

  alSeleccionar(item: string) {
    this.opcionSeleccionada.set(item)
    if (this.appState() == 'idle')
      this.appState.set('ready')
  }

  disableDownload = computed<boolean>(() => {
    if (this.opcionSeleccionada() == undefined) { return true }
    else if (this.opcionSeleccionada() != undefined && this.appState() == 'idle') { return false }
      else if (this.opcionSeleccionada() != undefined && this.appState() == 'ready') { return false }
        else if (this.opcionSeleccionada() != undefined && this.appState() == 'loading') { return true }
          else if (this.appState() == 'done') { return true }
          else { return true }
  })

  label = computed<string>(() => {
    switch (this.appState()) {
      case 'idle': return "Descargar"
      case 'ready': return "Descargar"
      case 'loading': return "Descargando"
      case 'done': return "Hecho"
    }
  })

  stylesByState = computed<string>(() => {
    switch (this.appState()) {
      case 'idle': return "bg-emerald-900 text-emerald-700 cursor-not-allowed gap-2"
      case 'ready': return "bg-emerald-700 hover:bg-emerald-800 text-white cursor-pointer gap-2"
      case 'loading': return "bg-emerald-800 text-white/70 cursor-not-allowed gap-2"
      case 'done': return "bg-emerald-700 text-white cursor-default gap-2"
    }
  })

  catalogo = signal([
    "MC1",
    "MC2",
    "MC3",
    "MC4",
    "MC5",
    "MC6",
  ])

  // descargar el blob aqui...
  downloadFile() {
    // inicio de operacion
    this.appState.set('loading')

    // imaginemos que lo procesamos aqui...

    //ya que se haya terminado el proceso, corro esto a saco
    setTimeout(() => {
      this.appState.set('done')
      setTimeout(() => this.appState.set('ready'), 2000)
    }, 2000)
  }

}
