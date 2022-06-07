import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { forkJoin } from 'rxjs';
import { CatalogGroup, CatalogItem, CatalogType, UpdateCatalogItemDto } from 'src/app/api/models';
import { CatalogGroupService, CatalogItemService, CatalogTypeService } from 'src/app/api/services';
import 'automapper-ts';
import { mapper } from 'src/app/util/mapper-util';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.page.html',
  styleUrls: ['./edit-item.page.scss'],
})
export class EditItemPage implements OnInit {

  @Input() id: number;

  item: CatalogItem;
  categories: CatalogType[];
  groups: CatalogGroup[] = [];
  isLoading = true;

  constructor(
    private catalogItemSvc: CatalogItemService,
    private catalogTypeSvc: CatalogTypeService,
    private catalogGroupSvc: CatalogGroupService,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    forkJoin({
      res1: this.getItem(),
      res2: this.getCategories()
    }).pipe().subscribe((res) => {
      this.isLoading = false;
    });
  }

  getItem() {
    return new Promise<void>(resolve => {
      this.catalogItemSvc.catalogItemIdGet({ id: this.id }).subscribe((res) => {
        console.log('get item: ', res);
        this.item = res;
        this.getGroups(res.catalogTypeId);
        resolve();
      }, () => {
        this.item = {
          name: '',
          description: '',
          catalogTypeId: 0,
        };
        resolve();
      });
    });
  }

  getCategories() {
    return new Promise<void>(resolve => {
      this.catalogTypeSvc.catalogTypeGet().subscribe((res) => {
        console.log('get categories: ', res);
        this.categories = res;
        resolve();
      }, () => {
        this.categories = [];
        resolve();
      });
    });
  }

  getGroups(categoryId: number) {
    this.catalogGroupSvc.catalogGroupByTypeTypeIdGet({ typeId: categoryId }).subscribe((res) => {
      this.groups = res;
    });
  }

  async dismissModal() {
    await this.modalCtrl.dismiss();
  }

  saveOnClicked() {
    if (this.id === 0) {
      this.createItemCommand();
    } else {
      this.updateItemCommand();
    }
  }

  createItemCommand() {
    this.catalogItemSvc.catalogItemPost({ body: this.item }).subscribe((res) => {
      console.log('create item: ', res);
      this.dismissModal();
    });
  }

  updateItemCommand() {
    // const updateItem: UpdateCatalogItemDto = mapper<UpdateCatalogItemDto, CatalogItem>(this.item);
    const updateItem: UpdateCatalogItemDto = {
      id: this.item.id,
      name: this.item.name,
      description: this.item.description,
      price: this.item.price,
      pictureUri: this.item.pictureUri,
      catalogTypeId: this.item.catalogTypeId,
      catalogGroupId: this.item.catalogGroupId
    };
    this.catalogItemSvc.catalogItemPut({ body: updateItem }).subscribe((res) => {
      this.dismissModal();
    });
  }

  categoryOnSelected(ev: number) {
    this.getGroups(ev);
  }

}
