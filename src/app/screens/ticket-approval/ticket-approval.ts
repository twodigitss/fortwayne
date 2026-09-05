import { Component, Inject, input } from '@angular/core';
import { Router } from '@angular/router';
// import { QueryParamsService } from '../../queryPuller/queryParams';

type TicketApprovalParams = {
  organization: string;
  ticketNumber: string;
};

@Component({
  selector: 'app-ticket-approval',
  templateUrl: './ticket-approval.html',
})
export class TicketApproval {
  readonly organization = input('Organización');
  readonly ticketNumber = input('0');
  // readonly qp = Inject(QueryParamsService)

  asd = 0
  constructor(private router: Router) { }
  ngOnInit() {
    // this.qp.All<TicketApprovalParams>()
  }

  approve(): void {
    // TODO: call approval API
    this.router.navigate(['/result', 'success']);

  }

  decline(): void {
    // TODO: call decline API
    this.router.navigate(['/result', 'failure']);
  }
}
