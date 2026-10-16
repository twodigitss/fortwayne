import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'approve',
    loadComponent: () =>
      import('./screens/ticket-approval/ticket-approval').then(
        (m) => m.TicketApproval,
      ),
  },
  {
    path: 'result/:type',
    loadComponent: () =>
      import('./screens/ticket-approval/result/result').then((m) => m.Result),
  },
  {
    path: 'ddf',
    loadComponent: () =>
      import('./screens/dynamicFilledForm/dff.component').then(
        (m) => m.DffComponent,
      ),
  },
  {
      path: 'down',
      loadComponent: () =>
        import('./screens/singleDownloadScreen/sd').then(
          (m) => m.default,
        ),
    },
];
