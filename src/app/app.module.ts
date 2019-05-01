import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NewsApiService } from './news-api.service';

@NgModule({
  imports:      [ 
                BrowserModule, 
                FormsModule,
                BrowserAnimationsModule,
                HttpClientModule,
                MatButtonModule,
                MatMenuModule,
                MatCardModule,
                MatToolbarModule,
                MatIconModule,
                MatSidenavModule,
                MatListModule
               ],
  declarations: [ AppComponent, HelloComponent ],
  providers: [NewsApiService], ///NewsApiService
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

//https://www.smashingmagazine.com/2018/10/news-application-with-angular-and-material-design/#top