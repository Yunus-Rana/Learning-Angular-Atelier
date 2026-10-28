import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Master {
  loggeduser?: string;
  http = inject(HttpClient);

  getClients() {
    return this.http.get('https://api.freeprojectapi.com/api/SmartParking/GetAllClients');
  }

  saveClients(obj: any) {
    return this.http.post('https://api.freeprojectapi.com/api/SmartParking/AddClient', obj);
  }

  updateClients(obj: any) {
    return this.http.post('https://api.freeprojectapi.com/api/SmartParking/UpdateClient', obj);
  }

  deleteClients(clientId: number) {
    return this.http.post(
      'https://api.freeprojectapi.com/api/SmartParking/DeleteClient?id=' + clientId,
      {},
    );
  }

  getformattedcardNo(cardNo: string) {
    const blurreddata = '**** **** ****';
    return blurreddata + ' ' + cardNo.substring(11);
  }
}
