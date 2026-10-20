import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-signalbasics',
  styleUrl: './signalbasics.css',
  templateUrl: './signalbasics.html',
})
export class Signalbasics {
  empMobileNo = signal('123234345');
  isActive: WritableSignal<boolean> = signal(true)
  cityList:WritableSignal<string[]> = signal(['Lahore','Karachi','Islamabad'])
  changeno(){
    this.empMobileNo.set("new number 0011")
  }
}
