import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs';

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

  constructor(private httpClient: HttpClient) {
    this.mySubscription = interval(1000).subscribe((x => {
      this.doStuff();
    }));
  }

  doStuff() {
    this.logMsg.push("Girish Lande");
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
    });
  }

  public StartAirCalibration() {
    console.log("Command=>StartAirCalibration");
    var output = this.httpClient.get(`http://localhost:22456/StartAirCalibration`);
    output.subscribe((data) => {
      console.log(data);
    });
  }

  public StartAirCalibrationSequence() {
    console.log("Command=>StartAirCalibrationSequence");
    var output = this.httpClient.get(`http://localhost:22456/StartAirCalibrationSequence`);
    output.subscribe((data) => {
      console.log(data);
    });
  }

  public CancelAirCalibration() {
    console.log("Command=>CancelAirCalibration");
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
