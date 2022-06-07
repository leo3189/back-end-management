import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { CatalogType } from 'src/app/api/models';
import { CatalogTypeService } from 'src/app/api/services';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  @ViewChild('mForm') form: NgForm;

  categories: CatalogType[];
  isOpenModal = false;
  isSaveLoading = false;
  selectedCategory: CatalogType = {
    id: 0,
    type: ''
  };

  constructor(
    private catalogTypeSvc: CatalogTypeService,
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.catalogTypeSvc.catalogTypeGet().subscribe((res) => {
      console.log('get categories: ', res);
      this.categories = res;
    }, () => {
      this.categories = [];
    });
  }

  createCategoryOnClicked() {
    this.isOpenModal = true;
  }

  deleteOnClicked(id: number) {
    this.catalogTypeSvc.catalogTypeIdDelete({ id }).subscribe(() => {
      this.getCategories();
    });
  }

  renameOnClicked(category: CatalogType) {
    this.selectedCategory = category;
    this.isOpenModal = true;
  }

  saveOnClicked() {
    this.isSaveLoading = true;

    if (this.form.valid) {
      if (this.selectedCategory.id !== 0) {
        this.updateCategory();
      } else {
        this.createCategory();
      }
    } else {
      this.isSaveLoading = false;
      this.form.controls.categoryName.markAsDirty();
    }
  }

  createCategory() {
    this.catalogTypeSvc.catalogTypePost({ body: this.selectedCategory }).subscribe(() => {
      this.reset();
      this.getCategories();
    }, () => {
      this.reset();
    });
  }

  updateCategory() {
    this.catalogTypeSvc.catalogTypePut({ body: this.selectedCategory }).subscribe(() => {
      this.reset();
      this.getCategories();
    }, () => {
      this.reset();
    });
  }

  reset() {
    this.isSaveLoading = false;
    this.isOpenModal = false;
    this.selectedCategory = {
      id: 0,
      type: ''
    };
  }
}
