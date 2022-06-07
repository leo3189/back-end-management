import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CatalogGroup } from 'src/app/api/models';
import { CatalogGroupService } from 'src/app/api/services';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss'],
})
export class AddGroupComponent implements OnInit {

  @Input() isOpen = false;
  @Input() isSaveLoading = false;
  @Input() categoryId: number;

  @Output() cancelOnClicked = new EventEmitter();

  group: CatalogGroup = {
    id: 0,
    name: ''
  };

  constructor(
    private catalogGroupSvc: CatalogGroupService
  ) { }

  ngOnInit() {}

  saveOnClicked() {
    this.isSaveLoading = true;
    this.group.catalogTypeId = this.categoryId;
    this.catalogGroupSvc.catalogGroupPost({ body: this.group }).subscribe(
      (res) => {
        this.isSaveLoading = false;
        this.handleCancel();
      }, () => {
        this.isSaveLoading = false;
        this.handleCancel();
      }
    );
  }

  handleCancel() {
    this.cancelOnClicked.emit();
  }

}
