import {Component} from '@angular/core';
import {LocalStorage} from 'src/models/enums/local-storage.enum';
import {LocalStorageService} from 'src/services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  theme;
  localStorageEnum = LocalStorage;
  title = 'ngx-tailwind';
  constructor(private localStorageService: LocalStorageService) {
    this.theme = this.localStorageService.get(this.localStorageEnum.theme);
  }
}
