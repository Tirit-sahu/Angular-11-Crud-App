import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Employee } from 'src/app/employee';
import { Router } from "@angular/router"

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  id:any;
  data:any;
  employee = new Employee();
  constructor(private router: Router, private route:ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id);
    this.id = this.route.snapshot.params.id;
    this.getData();
  }

  getData(){
    this.dataService.getEmployeeById(this.id).subscribe(res => {
      // console.log(res);
      this.data = res;
      this.employee = this.data;
    });
  }

  updateEmployee(){
    this.dataService.updateData(this.id, this.employee).subscribe(res =>{
      console.log(res);
      this.router.navigate(['']);
    })
  }

}
