import { Component, OnInit } from '@angular/core';
import {Bank} from "../bank-bank";
import { ActivatedRoute, Router } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank-detail',
  templateUrl: './bank-detail.component.html',
  styleUrls: ['./bank-detail.component.scss']
})
export class BankDetailComponent implements OnInit {
  pageTitle = 'Bank Detail';
  errorMessage = '';
  bank: Bank | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private bankService: BankService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = param;
      this.getBank(id);
    }
  }

  getBank(id: string) {
    this.bankService.getBank(id).subscribe(
        (bank: any) => this.bank = bank,
        (error: any) => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/banks']);
  }
}
