import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponentComponent } from './components/user-component/user-component.component';
import { ProfileComponentComponent } from './components/profile-component/profile-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    ProfileComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
