import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

type state = 'idle' | 'ready' | 'loading'

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
          else { return true }
  })

  label = computed<string>(() => {
    switch (this.appState()) {
      case 'idle': return "Descargar"
      case 'ready': return "Descargar"
      case 'loading': return "Descargando"
    }
  })

  stylesByState = computed<string>(() => {
    switch (this.appState()) {
      case 'idle': return "bg-emerald-900 text-emerald-700 cursor-not-allowed"
      case 'ready': return "bg-emerald-700 hover:bg-emerald-800 text-white cursor-pointer "
      case 'loading': return "bg-emerald-800 text-white/70 cursor-not-allowed"
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
    this.appState.set('loading')
  }

}
