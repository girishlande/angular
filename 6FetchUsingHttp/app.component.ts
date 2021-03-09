import { Component } from '@angular/core';
import { ConfigService, Config } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'FetchUsingHttp';

  config:Config = { heroesUrl: 'a', textfile: 'b' };

  constructor(private configService: ConfigService) {

  }

  showConfig() {
    this.configService.getConfig()
      // clone the data object, using its known Config shape
      .subscribe((data: Config) => this.config = { ...data });
  }

}
