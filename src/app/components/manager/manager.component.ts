import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatSort } from '@angular/material';

interface Managerdetail {
  mid: number;
  mgname: string;
  mob: string;
  email: string;
  loc: string;
}

interface EmployeeDetail {
  eid: number;
  ename: string;
  desig: string;
  mob: number;
  email: string;
  loc: string;
  mgrname: string;
  mid: number;
}


@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit , AfterViewInit {

  private managerId: number;
  public selectedManager: Managerdetail;
  public associatedEmployess: EmployeeDetail[];

  displayedColumns: string[] = ['name', 'designation', 'mobile-Number', 'email' , 'edit'];
  dataSource: any;

   employeesData: EmployeeDetail[] = [
    {
      eid: 1, ename: 'employee_1', desig: 'developer', mob: 9471931608,
      email: 'employee1@gmail.com', loc: 'saharsa_1', mgrname: 'manager1', mid: 1
    },
    {
      eid: 1, ename: 'employee_2', desig: 'developer', mob: 9371932347,
      email: 'employee2@gmail.com', loc: 'saharsa_2', mgrname: 'manager2', mid: 2
    },
    {
      eid: 1, ename: 'employee_3', desig: 'programmer', mob: 8871931623,
      email: 'employee3@gmail.com', loc: 'saharsa_3', mgrname: 'manager4', mid: 4
    },
    {
      eid: 1, ename: 'employee_4', desig: 'developer', mob: 9477771608,
      email: 'employee4@gmail.com', loc: 'saharsa_4', mgrname: 'manager4', mid: 4
    },
    {
      eid: 1, ename: 'employee_5', desig: 'programmer', mob: 9471881611, email:
        'employee5@gmail.com', loc: 'saharsa_5', mgrname: 'manager3', mid: 3
    },
    {
      eid: 1, ename: 'employee_6', desig: 'programmer', mob: 9471931608,
      email: 'employee6@gmail.com', loc: 'saharsa_6', mgrname: 'manager3', mid: 3
    },
    {
      eid: 1, ename: 'employee_7', desig: 'designer', mob: 9471931608,
      email: 'employee7@gmail.com', loc: 'saharsa_7', mgrname: 'manager3', mid: 3
    },
    {
      eid: 1, ename: 'employee_8', desig: 'designer', mob: 9471931123,
      email: 'employee8@gmail.com', loc: 'saharsa_8', mgrname: 'manager1', mid: 1
    },
    {
      eid: 1, ename: 'employee_9', desig: 'developer', mob: 9471931656,
      email: 'employee9@gmail.com', loc: 'saharsa_9', mgrname: 'manager2', mid: 2
    },
    {
      eid: 1, ename: 'employee_10', desig: 'designer', mob: 9471931543,
      email: 'employee10@gmail.com', loc: 'saharsa_10', mgrname: 'manager1', mid: 1
    }
  ];

  managers: Managerdetail[] = [
    { mid: 1, mgname: 'manager1', mob: '9471931157', email: 'manager1@gmail.com', loc: 'Hyd_1' },
    { mid: 2, mgname: 'manager2', mob: '9371931333', email: 'manager2@gmail.com', loc: 'Pune_2' },
    { mid: 3, mgname: 'manager3', mob: '9171931123', email: 'manager3@gmail.com', loc: 'Patna_3' },
    { mid: 4, mgname: 'manager4', mob: '9671931321', email: 'manager4@gmail.com', loc: 'Delhi_4' }
  ];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private actRoute: ActivatedRoute) {
    actRoute.params.subscribe((data) => {
      this.managerId = data.id;
    });
  }

  ngOnInit() {
    this.getSelectedManagerDetails();
    this.getAssociatedEmployees();
  }

  getSelectedManagerDetails = () => {
    this.selectedManager = this.managers.find((mgr) => mgr.mid === +this.managerId);
    console.log(this.selectedManager);
  }

  getAssociatedEmployees = () => {
    this.associatedEmployess = this.employeesData.filter((emp) => emp.mid === +this.managerId);
    this.dataSource = new MatTableDataSource(this.associatedEmployess);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  editDetail = (employee: EmployeeDetail) => {
    console.log(employee);
  }

}