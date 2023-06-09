import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cve } from "../interfaces/Cve";
import { STATE } from "../enums/STATE";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-cves',
  templateUrl: './cves.component.html',
  styleUrls: ['./cves.component.scss']
})
export class CvesComponent implements OnInit {
  states = STATE;
  currentState = STATE.VIEW;
  createForm: FormGroup;
  downloadCve(url: string) {
    window.open(url, '_blank');
  }

  cves: Cve[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.createForm = this.formBuilder.group({
      cve: new FormControl(""),
      url: new FormControl(""),
      date_of_add: new FormControl("")
    });
  }

  ngOnInit() {
    this.getCves();
  }

  getCves() {
    this.http.get<Cve[]>("http://localhost:8081/cve")
      .subscribe((data) => {
        this.cves = data;
      });
  }

  deleteCve(cveId: number) {
    this.http.delete(`http://localhost:8081/cve/${cveId}`, { responseType: 'text' })
      .subscribe((result) => {
        location.reload();
      });
  }

  createCve() {
    this.http.post("http://localhost:8081/cve", this.createForm.value, { responseType: 'text' })
      .subscribe((result) => {
        location.reload();
      });
  }

  setCreate() {
    this.currentState = STATE.CREATE;
  }
}

// import {Component, OnInit} from '@angular/core';
// import {HttpClient} from "@angular/common/http";
// import {Cve} from "../interfaces/Cve";
// import {STATE} from "../enums/STATE";
// import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
//
// @Component({
//   selector: 'app-cves',
//   templateUrl: './cves.component.html',
//   styleUrls: ['./cves.component.scss']
// })
// export class CvesComponent {
//   states = STATE;
//   currentState = STATE.VIEW;
//   createForm: FormGroup;
//
//   cves: Cve[] = [];
//   constructor(
//     private formBuilder: FormBuilder,
//     private http: HttpClient,
//   ) {
//     this.createForm = this.formBuilder.group({
//       cve: new FormControl(""),
//       url: new FormControl(""),
//       date_of_add: new FormControl("")
//     })
//     this.getCves();
//   }
//
//   getCves() {
//     this.http.get("http://localhost:8081/cve")
//       .subscribe((data: any) => {
//         this.cves = data;
//       })
//   }
//   deleteCve(cveId: number) {
//     this.http.delete(`http://localhost:8081/cve/${cveId}`, {responseType: 'text'})
//       .subscribe((result) => {
//         location.reload();
//       })
//   }
//
//   createCve() {
//     this.http.post("http://localhost:8081/cve", this.createForm.value, {responseType: 'text'})
//       .subscribe((result) => {
//         location.reload()
//       })
//   }
//
//   setCreate() {
//     this.currentState = STATE.CREATE;
//   }
// }
