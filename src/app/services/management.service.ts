import { Injectable } from '@angular/core';
import { EmployeeDetail } from '../modals/employe-modal';
import { Managerdetail } from '../modals/manager-modal';

import {employeesData} from './../constants/employee-info';
import {managers} from './../constants/manager-info';

@Injectable()
export class ManagementService {

  constructor() { }

  getEmployee = () => {
    return employeesData;
  }

  getManagerData = () => {
    return managers;
  }

}
