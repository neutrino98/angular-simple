import { Injectable } from '@angular/core'
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}
}
