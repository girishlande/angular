import { Component, OnInit } from '@angular/core';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor(private sw: MembersService) { }

  currentParty = 'all';
  ngOnInit() {
  }

  getMembers() {
    return this.sw.getMembers(this.currentParty);
  }

  setCurrentParty(party) {
    this.currentParty = party;
  }
}
