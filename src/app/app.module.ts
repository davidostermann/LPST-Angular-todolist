import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ListService } from './list.service';
import { ListItemComponent } from './list-item/list-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AddComponent, ListComponent, ListItemComponent],
  imports: [BrowserModule, FormsModule],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
