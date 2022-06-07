import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CustomModalComponent } from './custom-modal/custom-modal.component';
import { NgxMaskModule } from 'ngx-mask';
import { AddGroupComponent } from './add-group/add-group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
  SideMenuComponent,
  CustomModalComponent,
  AddGroupComponent
];

const NGZORRO = [
  NzMenuModule,
  NzIconModule,
  NzTableModule,
  NzDropDownModule,
  NzPageHeaderModule,
  NzButtonModule,
  NzInputModule,
  NzSelectModule,
  NzSpinModule,
  NzModalModule,
  NzFormModule,
  NzDividerModule,
  NgxMaskModule,
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    ...NGZORRO,
    // NgxMaskModule.forRoot()
  ],
  exports: [
    ...COMPONENTS,
    ...NGZORRO
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ComponentsModule { }
