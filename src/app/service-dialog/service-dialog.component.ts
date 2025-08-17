import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-service-dialog',
  templateUrl: './service-dialog.component.html',
  styleUrls: ['./service-dialog.component.less']
})
export class ServiceDialogComponent {
  @Input() data: any;
  @Output() closeDialog = new EventEmitter<void>();

  close() {
    this.closeDialog.emit();
  }
}
