import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Master } from '../../services/master';

@Component({
  imports: [FormsModule, DatePipe],
  selector: 'app-client-crud',
  styleUrl: './client-crud.css',
  templateUrl: './client-crud.html',
  standalone: true,
})
export class ClientCrud {
  http = inject(HttpClient);
  clientlist: WritableSignal<any[]> = signal([]);

  newClientObj: any = {
    clientId: 0,
    clientName: '',
    businessName: '',
    contactPerson: '',
    contactNo: '',
    altContactNo: '',
    email: '',
    createdDate: new Date(),
    logo: '',
  };

  constructor(private mastersrv: Master){
    const loggedusername = this.mastersrv.loggeduser
  }

  //read part -- starts
  ngOnInit() {
    this.getAllClients();
    
  }
  getAllClients() {
    this.http.get('https://api.freeprojectapi.com/api/SmartParking/GetAllClients').subscribe({
      next: (res: any) => {
        this.clientlist.set(res.data);
      },
    });
  } //ends

  //create part -- starts
  onSaveClient() {
    this.http.post('https://api.freeprojectapi.com/api/SmartParking/AddClient', this.newClientObj)
      .subscribe({
        next: (res: any) => {
          if (res.result) {
            alert('Client got added');
            this.getAllClients();
          } else {
            alert(res.message);
          }
        },
      });
  } //ends

  //update part -- starts
  onEdit(data: any) {
    this.newClientObj = { ...data };
  }
  OnUpdateClient() {
    this.http
      .post('https://api.freeprojectapi.com/api/SmartParking/UpdateClient', this.newClientObj)
      .subscribe({
        next: (res: any) => {
          if (res.result) {
            alert('Client got Updated');
            this.getAllClients();
          } else {
            alert(res.message);
          }
        },
        error: (err: any) => {
          console.error('Client update failed', err);
          alert(err.error?.message || 'Could not update the client. Please try again.');
        },
      });
  } //ends

  //delete part -- starts
  onDelete(clientId: number) {
    const isconfirm = confirm('Are you sure you want to delete this client?');
    if (isconfirm) {
      this.http
        .post('https://api.freeprojectapi.com/api/SmartParking/DeleteClient?id=' + clientId, {})
        .subscribe({
          next: (res: any) => {
            if (res.result) {
              alert('Client deleted');
              this.getAllClients();
            } else {
              alert(res.message);
            }
          },
        });
    }
  }//ends
}
