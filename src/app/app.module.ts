import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {UsersListComponent} from './shared/components/users/users-list/users-list.component';
import {UserItemComponent} from './shared/components/users/user-item/user-item.component';
import {AltTitlePipe} from './shared/pipes/alt-title.pipe';
import {AddNewComponent} from './shared/components/users/add-new/add-new.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    // Users list components
    UsersListComponent,
    UserItemComponent,
    AltTitlePipe,
    AddNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
