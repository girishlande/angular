import { Component, OnInit } from '@angular/core';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent implements OnInit {

  availableParties = [
    {value:'all',describe:'All'},
    { value: 'bjp', describe: 'BJP' },
    { value: 'congress', describe: 'Congress' }
  ];
  constructor(private sw: MembersService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form.value.name + " " + form.value.party);
    this.sw.addMember({ name: form.value.name, party: form.value.party });
  }

}
