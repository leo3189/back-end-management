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

import { CatalogType } from '../models/catalog-type';
import { CreateCatalogTypeDto } from '../models/create-catalog-type-dto';
import { UpdateCatalogTypeDto } from '../models/update-catalog-type-dto';

@Injectable({
  providedIn: 'root',
})
export class CatalogTypeService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation catalogTypeGet
   */
  static readonly CatalogTypeGetPath = '/catalog-type';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `catalogTypeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogTypeGet$Response(params?: {
  }): Observable<StrictHttpResponse<Array<CatalogType>>> {

    const rb = new RequestBuilder(this.rootUrl, CatalogTypeService.CatalogTypeGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CatalogType>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `catalogTypeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogTypeGet(params?: {
  }): Observable<Array<CatalogType>> {

    return this.catalogTypeGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CatalogType>>) => r.body as Array<CatalogType>)
    );
  }

  /**
   * Path part for operation catalogTypePut
   */
  static readonly CatalogTypePutPath = '/catalog-type';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `catalogTypePut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  catalogTypePut$Response(params: {
    body: UpdateCatalogTypeDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CatalogTypeService.CatalogTypePutPath, 'put');
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
   * To access the full response (for headers, for example), `catalogTypePut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  catalogTypePut(params: {
    body: UpdateCatalogTypeDto
  }): Observable<void> {

    return this.catalogTypePut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation catalogTypePost
   */
  static readonly CatalogTypePostPath = '/catalog-type';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `catalogTypePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  catalogTypePost$Response(params: {
    body: CreateCatalogTypeDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CatalogTypeService.CatalogTypePostPath, 'post');
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
   * To access the full response (for headers, for example), `catalogTypePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  catalogTypePost(params: {
    body: CreateCatalogTypeDto
  }): Observable<void> {

    return this.catalogTypePost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation catalogTypeIdDelete
   */
  static readonly CatalogTypeIdDeletePath = '/catalog-type/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `catalogTypeIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogTypeIdDelete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CatalogTypeService.CatalogTypeIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `catalogTypeIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogTypeIdDelete(params: {
    id: number;
  }): Observable<void> {

    return this.catalogTypeIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
