import { Component} from '@angular/core';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor(private dataStorageService: DataStorageService,
                private authService: AuthService) {}

    saveRecipes() {
        this.dataStorageService
            .storeRecipes()
            .subscribe(
                (response: HttpEvent<Object>) => {
                    console.log(response.type === HttpEventType.Response);
                    //console.log(response);
                }
            );
    }

    fetchRecipes() {
        this.dataStorageService.getRecipes();
    }

    logOut() {
      this.authService.logOut();
    }

    isAuthenticated(){
      return this.authService.isAuthenticated();
    }
}
