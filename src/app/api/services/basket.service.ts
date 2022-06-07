/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { BasketCheckoutDto } from '../models/basket-checkout-dto';
import { CustomerBasketDto } from '../models/customer-basket-dto';

@Injectable({
  providedIn: 'root',
})
export class BasketService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation basketPost
   */
  static readonly BasketPostPath = '/basket';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `basketPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  basketPost$Response(params: {
    body: CustomerBasketDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BasketService.BasketPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `basketPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  basketPost(params: {
    body: CustomerBasketDto
  }): Observable<void> {

    return this.basketPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation basketCustomerIdGet
   */
  static readonly BasketCustomerIdGetPath = '/basket/{customerId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `basketCustomerIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  basketCustomerIdGet$Response(params: {
    customerId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BasketService.BasketCustomerIdGetPath, 'get');
    if (params) {
      rb.path('customerId', params.customerId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `basketCustomerIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  basketCustomerIdGet(params: {
    customerId: string;
  }): Observable<void> {

    return this.basketCustomerIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation checkoutPost
   */
  static readonly CheckoutPostPath = '/checkout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `checkoutPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  checkoutPost$Response(params: {
    'x-requestid': string;
    body: BasketCheckoutDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BasketService.CheckoutPostPath, 'post');
    if (params) {
      rb.header('x-requestid', params['x-requestid'], {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `checkoutPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  checkoutPost(params: {
    'x-requestid': string;
    body: BasketCheckoutDto
  }): Observable<void> {

    return this.checkoutPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
