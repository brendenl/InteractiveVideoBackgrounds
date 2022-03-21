import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatComponent } from './components/cat/cat.component';
import { CatModule } from './pages/cat/cat.module';

@NgModule({
  declarations: [
    AppComponent,
    CatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
