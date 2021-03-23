import { Component, ViewChild  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'p2';
  kvList = [];
  focalSpotList = [];
  collimationList = [];
  rotationList = [];
  logMsg = [];
  mySubscription: Subscription
  mySelect = [];
  multiple = true;
  isSelected = true;
  NextLog = 0;
  selectedFocalSpot: any;
  selectedCollimation: any;
  selectedRotation: any;
  selectedWarmupType = "cold";

  @ViewChild('LogList') LogList;

  constructor(private httpClient: HttpClient) {
  }

  getLogAtIndex() {
    this.mySubscription = interval(1000).subscribe((x => {
      var output = this.httpClient.get("http://localhost:22456/GetLog/" + String(this.NextLog), { responseType: 'json' });
    output.subscribe((data) => {
      var object = data["LogMessage"];
      var counter = object["Id"];
      var Message = object["Message"];
      if (Message != null) {
        this.NextLog = counter;
        for (var i = 0; i < Message.length; i++) {
          this.logMsg.push(Message[i]);
        }
      } 
    });
    }));
  }

  selectChange() {
    for (var i = 0; i < this.mySelect.length; i++) {
      console.log("Selected:" + this.mySelect[i]);
    }
  }

  public GetAirCalibrationData() {
    console.log("Command=>GetAirCalibrationData");
    var output = this.httpClient.get(`http://localhost:22456/GetAirCalibrationData`, { responseType: 'json' });
    output.subscribe((data) => {
      console.log(data);
      var object = data["AirCalibrationData"];
      this.kvList = object["Kv"];
      this.focalSpotList = object["FocalSpot"];
      this.collimationList = object["Collimation"];
      this.rotationList = object["Rotation"];

      this.selectedCollimation = this.collimationList[0];
      this.selectedFocalSpot = this.focalSpotList[0];
      this.selectedRotation = this.rotationList[0];
    });
  }

  public AddDummyLog() {
    this.logMsg.push("Hello Girish");
  }

  public StartAirCalibration() {
    
    var output = this.httpClient.get(`http://localhost:22456/StartAirCalibration`);
    output.subscribe((data) => {
      console.log(data);
    });
  }

  public StartAirCalibrationPost() {
    this.httpClient.post<any>('http://localhost:22456/StartAirCalibrationPost', { Kvs: this.mySelect }).subscribe({
      next: data => {
        console.log(data);
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })
  }

  public StartAirCalibrationSequence() {
    console.log("Command=>StartAirCalibrationSequence");
    var output = this.httpClient.get(`http://localhost:22456/StartAirCalibrationSequence`);
    output.subscribe((data) => {
      console.log(data);
    });
  }

  public CancelAirCalibration() {
    var output = this.httpClient.get(`http://localhost:22456/CancelAirCalibration`);
    output.subscribe((data) => {
      console.log(data);
    });
  }

  public StartWarmup() {
    console.log("Command=>StartWarmup");
    var output = this.httpClient.get(`http://localhost:22456/StartWarmup`);
    output.subscribe((data) => {
      console.log(data);
    });
  }

  public StartWarmupSequence() {
    console.log("Command=>StartWarmupSequence");
    var output = this.httpClient.get(`http://localhost:22456/StartWarmupSequence`);
    output.subscribe((data) => {
      console.log(data);
    });
  }

  public CancelWarmup() {
    console.log("Command=>CancelWarmup");
    var output = this.httpClient.get(`http://localhost:22456/CancelWarmup`);
    output.subscribe((data) => {
      console.log(data);
    });
  }

}


export class AirCalibrationData {
  constructor(
    public KV: string[],
    public FocalSpot: string[],
    public Rotation: string[],
    public Collimation: string[],
  ) { }
}
