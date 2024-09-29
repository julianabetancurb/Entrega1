import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-service',
  standalone: true,
  imports: [],
  templateUrl: './card-service.component.html',
  styleUrl: './card-service.component.css'
})
export class CardServiceComponent {
  @Input() imageSrc: string = '';
  @Input() title: string = '';
  @Input() buttonText: string = 'Ver más';
  @Input() links: { text: string, href: string }[] = [];
  @Input() isLightTheme: boolean = true;


}
