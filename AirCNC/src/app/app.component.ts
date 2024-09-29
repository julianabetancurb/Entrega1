import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardServiceComponent } from './layout/components/card-service/card-service.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardServiceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AirCNC';
}
