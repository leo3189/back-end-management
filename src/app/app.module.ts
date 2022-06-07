import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import en from '@angular/common/locales/en';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiModule } from './api/api.module';
import { ComponentsModule } from './components/components.module';
import { AuthInterceptor, AuthModule } from 'angular-auth-oidc-client';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NgxMaskModule } from 'ngx-mask';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    ApiModule.forRoot({ rootUrl: 'https://localhost:7051' }),
    AuthModule.forRoot({
      config: {
        authority: 'https://localhost:7008',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: 'bo-web',
        scope: 'openid profile offline_access api-gateway',
        responseType: 'id_token token',
        silentRenew: true,
        useRefreshToken: true,
        autoUserInfo: true
      }
    }),
    NgxMaskModule.forRoot()
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
