// @ts-ignore
import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Employee } from '../employee';
// @ts-ignore
import { ActivatedRoute, Router } from '@angular/router';
// @ts-ignore
import { EmployeeService } from '../employee.service';

// @ts-ignore
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  pageTitle = 'Employee Detail';
  errorMessage = '';
  employee: Employee | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private employeeService: EmployeeService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = param;
      this.getEmployee(id);
    }
  }

  getEmployee(id: string) {
    this.employeeService.getEmployee(id).subscribe(
        (employee: any) => this.employee = employee,
        (error: any) => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/employees']);
  }
}
