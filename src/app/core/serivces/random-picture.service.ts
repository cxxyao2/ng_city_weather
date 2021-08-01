// every 3s , refresh the image
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, timer } from 'rxjs';
import { catchError, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

const CACHE_SIZE = 1;
const REFRESH_INTERVAL = 10000;

@Injectable({
  providedIn: 'root',
})

// this.imageSrcTop = `https://picsum.photos/${this.innerWidth}/${this.innerHeight}?random=${data}`;
export class RandomPictureService {
  private fallbackImage = 'assets/cites/default.svg';
  private cacheImageSrc$?: Observable<{}>;
  constructor(private http: HttpClient) {}
  get picUrl() {
    if (!this.cacheImageSrc$) {
      const timer$ = timer(0, REFRESH_INTERVAL);
      this.cacheImageSrc$ = timer$.pipe(
        switchMap((val) => this.getRandomPic(val)),
        shareReplay(CACHE_SIZE)
      );
    }
    return this.cacheImageSrc$;
  }

  getRandomPic(randomId: number) {
    const width = 300;
    const height = 400;
    const endpoint = `https://picsum.photos/${width}/${height}?random=${randomId}`;
    return this.http.get(endpoint, { responseType: 'blob' }).pipe(
      tap((_) => console.log('fetched image again')),
      catchError((err) => {
        window.alert('jane      err' && ' ' && JSON.stringify(err));
        return of(this.fallbackImage);
      })
    );
  }

  // you will ned this function to fetch the image blob.
  //  function getImage(url: string, fileName: string) {
  //      // on the first then you will return blob from response
  //     return  fetch(url).then(r => r.blob())
  //     .then((blob) => { // on the second, you just create a file from that blob, getting the type and name that intend to inform

  //         return new File([blob], fileName + '.' +  blob.type.split('/')[1]) ;
  //     });
  // }

  // // example url
  // var url = 'https://img.freepik.com/vetores-gratis/icone-realista-quebrado-vidro-fosco_1284-12125.jpg';

  // // calling the function
  // getImage(url, 'your-name-image').then(function(file) {

  //     // with file reader you will transform the file in a data url file;
  //     var reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onloadend = () => {

  //     // just putting the data url to img element
  //         document.querySelector('#image').src = reader.result ;
  //     }
  // })

  // .html
  // <img src="" id="image"/>
}
