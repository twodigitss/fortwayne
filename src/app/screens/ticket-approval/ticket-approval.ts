import { Component, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-approval',
  templateUrl: './ticket-approval.html',
})
export class TicketApproval {
  readonly organization = input('Organización');
  readonly ticketNumber = input('0');

  constructor(private router: Router) {}

  approve(): void {
    // TODO: call approval API
    this.router.navigate(['/result', 'success']);
  }

  decline(): void {
    // TODO: call decline API
    this.router.navigate(['/result', 'failure']);
  }
}
