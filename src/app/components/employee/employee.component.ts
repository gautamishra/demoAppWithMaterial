import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { Router } from '@angular/router';
import { EmployeeDetail } from '../../modals/employe-modal';
import {employeesData} from './../../constants/employee-info';
// Third Party Import
// import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})


export class EmployeeComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['ename', 'desig', 'mob', 'email', 'mgrname'];
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
