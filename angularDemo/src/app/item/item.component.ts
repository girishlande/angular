import { Component, OnInit,Input } from '@angular/core';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() member;
  constructor(private sw:MembersService) { }

  ngOnInit() {
  }

  updateParty(party) {
    this.sw.updateParty({ name: this.member.name, party: party });
  }
}
