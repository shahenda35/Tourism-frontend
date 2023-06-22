import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Option {
  name: string;
  code: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showSearchForms: boolean = false;
  searchText: string = '';
  options: Option[] = [];
  selectedType: Option = { name: '', code: '' };
  isAuthenticated: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isAuthenticated = false;
    this.options = [
      { name: 'choose a search criteria', code: '' },
      { name: 'agency', code: 'agency' },
      { name: 'city', code: 'city' },
    ];
  }

  showMenu() {}
  showSearchForm() {
    this.showSearchForms = true;
    this.selectedType.code = '';
  }
  takeUserInput(e: any) {
    this.searchText = e.target.value;
  }
  sendSearchReq() {
    console.log(this.searchText);
  }
  hideForm() {
    this.showSearchForms = false;
  }
  goToAgency() {
    this.router.navigateByUrl(`/agency?searchText=${this.searchText}`);
    this.showSearchForms = false;
  }

  goToCity() {
    this.router.navigateByUrl(`/city?searchText=${this.searchText}`);
    this.showSearchForms = false;
  }

  logout() {
    console.log('logout');
  }
}
