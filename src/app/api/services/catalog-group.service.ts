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

import { CatalogGroup } from '../models/catalog-group';
import { CreateCatalogGroupDto } from '../models/create-catalog-group-dto';
import { UpdateCatalogGroupDto } from '../models/update-catalog-group-dto';

@Injectable({
  providedIn: 'root',
})
export class CatalogGroupService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation catalogGroupGet
   */
  static readonly CatalogGroupGetPath = '/catalog-group';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `catalogGroupGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogGroupGet$Response(params?: {
  }): Observable<StrictHttpResponse<Array<CatalogGroup>>> {

    const rb = new RequestBuilder(this.rootUrl, CatalogGroupService.CatalogGroupGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CatalogGroup>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `catalogGroupGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogGroupGet(params?: {
  }): Observable<Array<CatalogGroup>> {

    return this.catalogGroupGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CatalogGroup>>) => r.body as Array<CatalogGroup>)
    );
  }

  /**
   * Path part for operation catalogGroupPut
   */
  static readonly CatalogGroupPutPath = '/catalog-group';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `catalogGroupPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  catalogGroupPut$Response(params: {
    body: UpdateCatalogGroupDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CatalogGroupService.CatalogGroupPutPath, 'put');
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
   * To access the full response (for headers, for example), `catalogGroupPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  catalogGroupPut(params: {
    body: UpdateCatalogGroupDto
  }): Observable<void> {

    return this.catalogGroupPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation catalogGroupPost
   */
  static readonly CatalogGroupPostPath = '/catalog-group';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `catalogGroupPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  catalogGroupPost$Response(params: {
    body: CreateCatalogGroupDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CatalogGroupService.CatalogGroupPostPath, 'post');
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
   * To access the full response (for headers, for example), `catalogGroupPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  catalogGroupPost(params: {
    body: CreateCatalogGroupDto
  }): Observable<void> {

    return this.catalogGroupPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation catalogGroupByTypeTypeIdGet
   */
  static readonly CatalogGroupByTypeTypeIdGetPath = '/catalog-group-by-type/{typeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `catalogGroupByTypeTypeIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogGroupByTypeTypeIdGet$Response(params: {
    typeId: number;
  }): Observable<StrictHttpResponse<Array<CatalogGroup>>> {

    const rb = new RequestBuilder(this.rootUrl, CatalogGroupService.CatalogGroupByTypeTypeIdGetPath, 'get');
    if (params) {
      rb.path('typeId', params.typeId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CatalogGroup>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `catalogGroupByTypeTypeIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogGroupByTypeTypeIdGet(params: {
    typeId: number;
  }): Observable<Array<CatalogGroup>> {

    return this.catalogGroupByTypeTypeIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CatalogGroup>>) => r.body as Array<CatalogGroup>)
    );
  }

  /**
   * Path part for operation catalogGroupIdDelete
   */
  static readonly CatalogGroupIdDeletePath = '/catalog-group/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `catalogGroupIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogGroupIdDelete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CatalogGroupService.CatalogGroupIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `catalogGroupIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogGroupIdDelete(params: {
    id: number;
  }): Observable<void> {

    return this.catalogGroupIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
