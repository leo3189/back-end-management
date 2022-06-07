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

import { CatalogItem } from '../models/catalog-item';
import { CreateCatalogItemDto } from '../models/create-catalog-item-dto';
import { UpdateCatalogItemDto } from '../models/update-catalog-item-dto';

@Injectable({
  providedIn: 'root',
})
export class CatalogItemService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation catalogItemGet
   */
  static readonly CatalogItemGetPath = '/catalog-item';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `catalogItemGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogItemGet$Response(params?: {
  }): Observable<StrictHttpResponse<Array<CatalogItem>>> {

    const rb = new RequestBuilder(this.rootUrl, CatalogItemService.CatalogItemGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CatalogItem>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `catalogItemGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogItemGet(params?: {
  }): Observable<Array<CatalogItem>> {

    return this.catalogItemGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CatalogItem>>) => r.body as Array<CatalogItem>)
    );
  }

  /**
   * Path part for operation catalogItemPut
   */
  static readonly CatalogItemPutPath = '/catalog-item';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `catalogItemPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  catalogItemPut$Response(params: {
    body: UpdateCatalogItemDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CatalogItemService.CatalogItemPutPath, 'put');
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
   * To access the full response (for headers, for example), `catalogItemPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  catalogItemPut(params: {
    body: UpdateCatalogItemDto
  }): Observable<void> {

    return this.catalogItemPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation catalogItemPost
   */
  static readonly CatalogItemPostPath = '/catalog-item';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `catalogItemPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  catalogItemPost$Response(params: {
    body: CreateCatalogItemDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CatalogItemService.CatalogItemPostPath, 'post');
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
   * To access the full response (for headers, for example), `catalogItemPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  catalogItemPost(params: {
    body: CreateCatalogItemDto
  }): Observable<void> {

    return this.catalogItemPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation catalogItemsByTypeTypeIdGet
   */
  static readonly CatalogItemsByTypeTypeIdGetPath = '/catalog-items-by-type/{typeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `catalogItemsByTypeTypeIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogItemsByTypeTypeIdGet$Response(params: {
    typeId: number;
  }): Observable<StrictHttpResponse<Array<CatalogItem>>> {

    const rb = new RequestBuilder(this.rootUrl, CatalogItemService.CatalogItemsByTypeTypeIdGetPath, 'get');
    if (params) {
      rb.path('typeId', params.typeId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CatalogItem>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `catalogItemsByTypeTypeIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogItemsByTypeTypeIdGet(params: {
    typeId: number;
  }): Observable<Array<CatalogItem>> {

    return this.catalogItemsByTypeTypeIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CatalogItem>>) => r.body as Array<CatalogItem>)
    );
  }

  /**
   * Path part for operation catalogItemIdGet
   */
  static readonly CatalogItemIdGetPath = '/catalog-item/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `catalogItemIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogItemIdGet$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<CatalogItem>> {

    const rb = new RequestBuilder(this.rootUrl, CatalogItemService.CatalogItemIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CatalogItem>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `catalogItemIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogItemIdGet(params: {
    id: number;
  }): Observable<CatalogItem> {

    return this.catalogItemIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<CatalogItem>) => r.body as CatalogItem)
    );
  }

  /**
   * Path part for operation catalogItemIdDelete
   */
  static readonly CatalogItemIdDeletePath = '/catalog-item/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `catalogItemIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogItemIdDelete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CatalogItemService.CatalogItemIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `catalogItemIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogItemIdDelete(params: {
    id: number;
  }): Observable<void> {

    return this.catalogItemIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation catalogItemsByGroupGroupIdGet
   */
  static readonly CatalogItemsByGroupGroupIdGetPath = '/catalog-items-by-group/{groupId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `catalogItemsByGroupGroupIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogItemsByGroupGroupIdGet$Response(params: {
    groupId: number;
  }): Observable<StrictHttpResponse<Array<CatalogItem>>> {

    const rb = new RequestBuilder(this.rootUrl, CatalogItemService.CatalogItemsByGroupGroupIdGetPath, 'get');
    if (params) {
      rb.path('groupId', params.groupId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CatalogItem>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `catalogItemsByGroupGroupIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogItemsByGroupGroupIdGet(params: {
    groupId: number;
  }): Observable<Array<CatalogItem>> {

    return this.catalogItemsByGroupGroupIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CatalogItem>>) => r.body as Array<CatalogItem>)
    );
  }

}
