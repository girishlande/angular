import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { CreateMemberComponent } from './create-member/create-member.component';
import { MembersService } from './members.service';
const routes = [
  { path: '', component: TabsComponent },
  { path: 'create', component: CreateMemberComponent },
  { path: '**', component: TabsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreateMemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MembersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
