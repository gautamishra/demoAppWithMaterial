import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Managerdetail } from '../../modals/manager-modal';
import { EmployeeDetail } from '../../modals/employe-modal';
import {employeesData} from './../../constants/employee-info';
import { managers } from './../../constants/manager-info';
import * as _ from 'lodash';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit , AfterViewInit {

  private managerId: number;
  public selectedManager: Managerdetail;
  public associatedEmployess: EmployeeDetail[];
  selectedEmployee: EmployeeDetail;
  editEmployee = false;
  displayedColumns: string[] = ['name', 'designation', 'mobile-Number', 'email' , 'edit'];
  dataSource: any;


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
    this.selectedManager = managers.find((mgr) => mgr.mid === +this.managerId);
    console.log(this.selectedManager);
  }

  getAssociatedEmployees = () => {
    this.associatedEmployess = employeesData.filter((emp) => emp.mid === +this.managerId);
    this.dataSource = new MatTableDataSource(this.associatedEmployess);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  editDetail = (employee: EmployeeDetail) => {
    this.selectedEmployee = _.cloneDeep(employee);
    this.editEmployee = true;
  }

  saveDetails = () => {
    this.associatedEmployess.map((emp) => {
      if ( emp.eid === this.selectedEmployee.eid ) {
        emp.desig = this.selectedEmployee.desig;
        emp.email = this.selectedEmployee.email;
        emp.loc = this.selectedEmployee.loc;
        emp.ename = this.selectedEmployee.ename;
        emp.mob = this.selectedEmployee.mob;
      }
    });
    this.editEmployee = false;
  }
}
