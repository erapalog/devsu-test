import {
    Injectable,
  } from '@angular/core';
  
  
  import {
    Router
  } from '@angular/router';
  import {
    environment
  } from '../../environments/environment';
  
  
  @Injectable()
  export class CrudService {
  
  
  
    constructor(
      private router: Router,
      private httpClient: HttpClient){
  
    }
  
    private baseUrl = environment.baseUser;
    private apiListProducts=environment.listProducts;
  
    public get(url:string) {
        return this.httpClient.get < [] > (this.baseUrl + url);
    }
  
  
  
    public Send(data, url, type) {
  
      const headers = { 'Authorization': sessionStorage.getItem('Authorization')};
  
   
      if(type==2){
       return this.httpClient.put < [] > (this.apiUrlService + url,
         data)
      }
       return this.httpClient.post < [] > (this.apiUrlService + url,
         data)
    
  
    }
    public  SendNoBody( url) { 
  
      const headers = { 'Authorization': sessionStorage.getItem('Authorization')};
       return  this.httpClient.post < [] > (this.apiUrlService + url,{});
    
  
    }
  
    
    public login(data, url) {
  
      console.log(this.apiUrl + url)
       return this.httpClient.post < [] > (this.apiUrl + url, data)
    
  
    }
   
  
    public redirect() {
      let info=sessionStorage.getItem('userInfo');
  
      if(info==null || info==undefined || info=='')
        this.router.navigate(['/login']);
    }
  
    public SendFile(data, url) {
  
        return this.httpClient.post < [] >(this.apiUrl + url, data)
      
     
    }
  
  }
  