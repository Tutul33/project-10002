import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  activeTab = 'tab1';  // Initialize the default tab
  parentData = {
    message: "Data from parent"
  };

  // This function receives data from the child
  receiveData(data: any) {
    this.parentData = data;
  }
}
