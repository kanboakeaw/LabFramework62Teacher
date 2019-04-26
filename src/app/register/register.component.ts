import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BackendService } from "../backend.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private backendService: BackendService
  ) {}

  ngOnInit() {
    // ???? initial form ????????????????
    this.registerForm = this.formBuilder.group({
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
    // ??????????????????
    return this.registerForm.controls;
  }

  onSubmit() {
    // ?????????????? register ???????? ????????????
    console.log(this.f.rank.value);

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
            alert("Register success!");
            this.router.navigate(["/home"]);
          }
        });
    } else {
      alert("Invalid!"); // show mesage ?????????????????????? input
    }
  }
}



