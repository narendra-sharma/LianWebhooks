import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-webhook-page',
  templateUrl: './webhook-page.component.html',
  styleUrls: ['./webhook-page.component.css']
})
export class WebhookPageComponent implements OnInit {
  constructor() {
    $(document).ready(function () {
      $(".menu-toggle").click(function(e) {
      e.preventDefault();
      $(".menu-toggle").toggleClass("slide")
      $("#wrapper").toggleClass("toggled");
      $(this).find('i').toggleClass('fa-times fa-grip-lines');
     });
     $(".menu-toggle-mobile").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
      $('body').toggleClass('disable-scroll-on-mobile');
      // $(this).find('i').toggleClass('fa-grip-lines fa-times');
     });
    });
   }
  ngOnInit(): void {
   
  }

}
