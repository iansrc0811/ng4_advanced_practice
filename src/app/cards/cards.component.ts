import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  param: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // 取得當下的params，但如果是相同路由切換路由變數時，oninit就不會跑，路由參數也不會重新取得
    // this.param = this.route.snapshot.params['type'];
    this.route.params.subscribe(
      params => this.param = params['type']);
  }

  getCards(num) {
    // tslint:disable-next-line:radix
    this.router.navigate(['/', 'cards', parseInt(this.param) + num]);
  }

}
