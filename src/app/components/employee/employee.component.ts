import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { Router } from '@angular/router';
// Third Party Import
// import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


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

const employeesData: EmployeeDetail[] = [
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

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})


export class EmployeeComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'designation', 'mobile-Number', 'email', 'employer'];
  dataSource = new MatTableDataSource(employeesData);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  showManagerInfo = (manager: any) => {
    this.route.navigate(['/manager', manager.mid]);
  }
}
