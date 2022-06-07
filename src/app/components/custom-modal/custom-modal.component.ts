import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss'],
})
export class CustomModalComponent implements OnInit {

  @Input() isVisible = false;
  @Input() isCenter = true;
  @Input() title = '';
  @Input() modalContent: TemplateRef<any>;
  @Input() isLoading = false;

  @Output() submitOnClicked = new EventEmitter();
  @Output() cancelOnClicked = new EventEmitter();

  bodyStyle = {
    height: '100px',
  };

  constructor() { }

  ngOnInit() {}

  handleCancel() {
    this.cancelOnClicked.emit();
  }

  handleOk() {
    this.submitOnClicked.emit();
  }

}
