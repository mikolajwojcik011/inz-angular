import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {GetTestApiResponse} from "../../../models/get-test-api-response";

@Injectable({
  providedIn: 'root'
})
export class GetTestService {
  constructor(private http: HttpClient) {}

  getTest(publicKey: string): Observable<GetTestApiResponse> {
    return this.http
      .get<GetTestApiResponse>
      ('http://57.128.200.162:5000/get-test/' + publicKey
      ).pipe(
        map(response => response),
      );
  }
}
