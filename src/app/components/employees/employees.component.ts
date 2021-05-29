import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { DataService } from 'src/app/service/data.service';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees:any;
  employee = new Employee();

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getEmployeesData();
  }

  getEmployeesData(){
    this.dataService.getData().subscribe(res => {
      this.employees = res;
    });
  }

  insertData(){
    this.dataService.insertData(this.employee).subscribe(res => {
      // console.log(res);
      this.getEmployeesData();

    });
  }

  deleteData(id: any){
    if(confirm('Are you sure?')){
      this.dataService.deleteData(id).subscribe(res => {
        // console.log(res);
        this.getEmployeesData();
      });
    }    
  }


}
