import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { NzContextMenuService } from 'ng-zorro-antd/dropdown';
import { from, of, zip } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';
import { CatalogGroup, CatalogItem, CatalogType } from 'src/app/api/models';
import { CatalogGroupService, CatalogItemService, CatalogTypeService } from 'src/app/api/services';
import { AuthService } from 'src/app/services/auth.service';
import { EditItemPage } from '../edit-item/edit-item.page';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  items: CatalogItem[];
  categories: CatalogType[];
  groups: CatalogGroup[];
  isOpenGroupModal = false;
  isTableLoading = false;
  selectedCategory = 0;
  selectedGroup = 0;

  constructor(
    private catalogItemSvc: CatalogItemService,
    private catalogTypeSvc: CatalogTypeService,
    private catalogGroupSvc: CatalogGroupService,
    private modalCtrl: ModalController,
    private dropMenuSvc: NzContextMenuService,
  ) { }

  ngOnInit() {
    this.getItems();
    this.getCategories();
  }

  getItems() {
    this.isTableLoading = true;

    this.catalogItemSvc.catalogItemGet().subscribe(
      (res) => {
        this.items = res;
        this.isTableLoading = false;
      },
      () => {
        this.isTableLoading = false;
      }
    );
  }

  getCategories() {
    this.catalogTypeSvc.catalogTypeGet().subscribe((res) => {
      this.categories = res;
    });
  }

  createItemOnClicked() {
    this.openEditorItemModal(0);
  }

  deleteOnClicked(id: number) {
    this.catalogItemSvc.catalogItemIdDelete({id}).subscribe((res) => {
      this.getItems();
    });
  }

  editItemOnClicked(id: number) {
    this.openEditorItemModal(id);
  }

  async openEditorItemModal(id: number) {
    const modal = await this.modalCtrl.create({
      component: EditItemPage,
      componentProps: {
        id
      },
      cssClass: 'edit-item-modal'
    });

    modal.onDidDismiss().then(() => {
      if (this.selectedGroup > 0) {
        this.getItemsByGroup(this.selectedGroup);
      } else {
        this.getItemsByCategory(this.selectedCategory);
      }
    });

    return await modal.present();
  }

  moreOnClicked(event: MouseEvent, component: any) {
    this.dropMenuSvc.create({x: event.x + 15, y: event.y + 100}, component);
  }

  categoryOnSelected(ev: any) {
    this.isTableLoading = true;
    this.selectedCategory = ev;

    if (ev === 0) {
      this.selectedGroup = 0;
    }

    this.getItemsByCategory(ev);
    this.getGroupsByCategory(ev);
  }

  groupOnSelected(ev: any) {
    this.isTableLoading = true;
    this.selectedGroup = ev;

    if (ev === 0) {
      this.getItemsByCategory(this.selectedCategory);
    } else {
      this.getItemsByGroup(ev);
    }
  }

  getGroupsByCategory(id: number) {
    this.catalogGroupSvc.catalogGroupByTypeTypeIdGet({ typeId: id }).subscribe(
      res => {
        this.groups = res;
      },
      () => {
        this.groups = [];
      }
    );
  }

  getItemsByCategory(id: number) {
    this.catalogItemSvc.catalogItemsByTypeTypeIdGet({ typeId: id }).subscribe(
      (res) => {
        this.items = res;
        this.isTableLoading = false;
      },
      () => {
        this.isTableLoading = false;
      }
    );
  }

  getItemsByGroup(id: number) {
    this.catalogItemSvc.catalogItemsByGroupGroupIdGet({ groupId: id }).subscribe(
      (res) => {
        this.items = res;
        this.isTableLoading = false;
      },
      () => {
        this.isTableLoading = false;
      }
    );
  }

  groupModalOnCancel() {
    this.isOpenGroupModal = false;
    this.getGroupsByCategory(this.selectedCategory);
  }
}
