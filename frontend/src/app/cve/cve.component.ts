import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Cve } from '../interfaces/Cve';
import { STATE } from '../enums/STATE';

@Component({
  selector: 'app-cve',
  templateUrl: './cve.component.html',
  styleUrls: ['./cve.component.scss'],
})
export class CveComponent implements OnInit {
  updateForm!: FormGroup;
  cve: Cve = {} as Cve;
  cveId: string = '';

  states = STATE;
  currentState = STATE.VIEW;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.cveId = params['id'];
      this.getCve(this.cveId);
    });

    this.updateForm = this.formBuilder.group({
      cve: new FormControl(''),
      url: new FormControl(''),
      date_of_add: new FormControl(''),
    });
  }

  updateCve() {
    this.http
      .put(`http://localhost:8081/cve/${this.cveId}`, this.updateForm.value)
      .subscribe(() => {
        console.log('Success');
      });
  }

  goToCves() {
    this.router.navigate(['/cves']);
  }

  getCve(id: string) {
    this.http
      .get(`http://localhost:8081/cve/${id}`)
      .subscribe((data: any) => {
        this.cve = data;
        console.log({ cve: this.cve });
        this.updateForm.get('cve')?.patchValue(this.cve.cve);
        console.log(this.updateForm.get('cve')?.value);
        this.updateForm.get('url')?.patchValue(this.cve.url);
        this.updateForm
          .get('date_of_add')
          ?.patchValue(this.formatDate(this.cve.date_of_add));
      });
  }

  private formatDate(date: string) {
    let newDate = new Date(date);
    return newDate.toJSON().split('T')[0];
  }

  setState(state: STATE) {
    this.currentState = state;
  }
}
