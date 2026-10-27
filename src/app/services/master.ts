import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Master {
    loggeduser?: string;

    getformattedcardNo(cardNo: string){
        const blurreddata = "**** **** ****"
        return blurreddata + ' ' + cardNo.substring(11)
    }

}
