import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BackendService } from "../backend.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitting: Boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private backendService: BackendService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    // เป็น initial form ค่าฟอร์มเริ่มต้น
    this.registerForm = this.fb.group({
      rank: ["", Validators.required],
      first_name: ["", Validators.required],
      last_name: ["", Validators.required],
      id_mil: ["", Validators.required],
      unit_name: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  get f() {
    //เข้าถึงฟอร์มไม่ได้
    // เข้าถึงค่าของฟอร์ม
    return this.registerForm.controls;
  }

  onSubmit() {
    // เมื่อเรากดปุ่ม register ให้มาที่ ฟังก์ชั่นนี้

    //console.log(this.f.rank.value);

    //alert(this.f.rank.value);
    //alert('firstname = ' + this.f.first_name.value);
    this.submitting = true;
    if (!this.registerForm.invalid) {
      this.backendService
        .register(
          this.f.rank.value,
          this.f.first_name.value,
          this.f.last_name.value,
          this.f.id_mil.value,
          this.f.unit_name.value,
          this.f.username.value,
          this.f.password.value
        )
        .subscribe(data => {
          if (data) {
            if (data.status == true) {
              //alert("Register success!");
              Swal.fire({
                type: "success",
                title: "สาเร็จ",
                text: "Register success!"
              });
              this.router.navigate(["/home"]);
            } else {
              // alert(data.message);
              Swal.fire({
                type: "error",
                title: "แจ้งเตือน",
                text: "data.message"
              });
            }
          }
          this.submitting = false;
        });
    } else {
      // alert("Invalid!"); // show mesage กรณีกรอกข้อมูลไม่ครบใน input
      Swal.fire({
        type: "error",
        title: "กรอกข้อมูลไม่ครบ",
        text: "Invalid!"
      });
      this.submitting = false;
    }
  }
}
