import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Master } from '../../services/master';

@Component({
  imports: [FormsModule],
  selector: 'app-control-flow',
  styleUrl: './control-flow.css',
  templateUrl: './control-flow.html',
})
export class ControlFlow {
  isdiv1Visible:boolean = true;
  isCode = false;

  cityList = ["Lahore", "karachi", "Islamabad", "Peshawar", "Quetta"]

  studentList = [
  {
    grade: "A",
    CGPA: 3.71,
    city: "Islamabad",
    bloodgroup: "Y-",
    education: "Bachelor of Science in Computer Science"
  },
  {
    grade: "A+",
    CGPA: 3.82,
    city: "Lahore",
    bloodgroup: "Q+",
    education: "Intermediate in Computer Science"
  },
  {
    grade: "A+",
    CGPA: 3.66,
    city: "Lahore",
    bloodgroup: "O+",
    education: "Matriculation"
  },
  {
    grade: "A",
    CGPA: 3.75,
    city: "Karachi",
    bloodgroup: "B+",
    education: "Bachelor of Software Engineering"
  },
  {
    grade: "B+",
    CGPA: 3.45,
    city: "Faisalabad",
    bloodgroup: "A-",
    education: "Intermediate in Pre-Engineering"
  },
  {
    grade: "A+",
    CGPA: 3.90,
    city: "Rawalpindi",
    bloodgroup: "AB+",
    education: "Bachelor of Science in Data Science"
  },
  {
    grade: "A",
    CGPA: 3.55,
    city: "Multan",
    bloodgroup: "O-",
    education: "Intermediate in Arts"
  },
  {
    grade: "A+",
    CGPA: 3.80,
    city: "Peshawar",
    bloodgroup: "B-",
    education: "Bachelor of Science in Artificial Intelligence"
  },
  {
    grade: "B",
    CGPA: 3.20,
    city: "Quetta",
    bloodgroup: "A+",
    education: "Intermediate in Commerce"
  },
  {
    grade: "A+",
    CGPA: 3.95,
    city: "Gujranwala",
    bloodgroup: "AB-",
    education: "Bachelor of Science in Cyber Security"
  }
];

  toggleDiv(){
    this.isdiv1Visible = !this.isdiv1Visible;
  }

  mastersrv = inject(Master)
  storeLoggedData(){
    this.mastersrv.loggeduser =  'A-B-C'
  }

  originalcardno: string = '1234323487956700'
  formattedcard: string = ''

  constructor(){
    this.formattedcard = this.mastersrv.getformattedcardNo(this.originalcardno)
  }

}

