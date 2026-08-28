import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'ticket-approval',
    loadComponent: () =>
      import('./screens/ticket-approval/ticket-approval').then(
        (m) => m.TicketApproval,
      ),
  },
  {
    path: 'result/:type',
    loadComponent: () =>
      import('./screens/result/result').then((m) => m.Result),
  },
];
