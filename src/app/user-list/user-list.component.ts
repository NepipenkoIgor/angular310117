import {Component, OnInit, Input} from '@angular/core';
import {Observable} from "rxjs";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
@Component({
  selector: 'course-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input()
  public searchTerm:string;

  public users = Observable.of([{
    "firstName": "Юрий",
    "surname": "Гажала",
    "photo": "http://i.imgur.com/XwFFXcF.jpg",
    "country": "ua"
  }, {
    "firstName": "Дмитрий",
    "surname": "Симоненко",
    "photo": "http://i.imgur.com/gXtYESW.png",
    "country": "ua"
  }, {
    "firstName": "Иван",
    "surname": "Лобанов",
    "photo": "http://i.imgur.com/0KmAEkX.jpg",
    "country": "ru"
  }, {
    "firstName": "Роман",
    "surname": "Ермоченков",
    "photo": "http://i.imgur.com/XkL44ac.jpg",
    "country": "ua"
  }, {
    "firstName": "Виталий",
    "surname": "Кашкель",
    "photo": "http://i.imgur.com/WUiAjWd.png",
    "country": "by"
  }, {
    "firstName": "Кира",
    "surname": "Шатулова",
    "photo": "http://i.imgur.com/rYsRnhW.jpg",
    "country": "ru"
  }, {
    "firstName": "Марк",
    "surname": "Партола",
    "photo": "http://i.imgur.com/YQWyI0r.jpg",
    "country": "ru"
  }, {
    "firstName": "Евгений",
    "surname": "Саенко",
    "photo": "http://i.imgur.com/8NhHkLs.jpg",
    "country": "ru"
  }, {
    "firstName": "Кирилл",
    "surname": "Уразманов",
    "photo": "http://i.imgur.com/N4nxPof.jpg",
    "country": "ru"
  }, {"firstName": "Александр", "surname": "Ильющеня", "country": "by"}, {
    "firstName": "Сергей",
    "surname": "Дрозд",
    "photo": "http://i.imgur.com/vI2JjXA.jpg",
    "country": "ua"
  }, {
    "firstName": "Олег",
    "surname": "Легун",
    "photo": "http://i.imgur.com/Gmg5OAZ.png",
    "country": "ru"
  }, {"firstName": "Виталий", "surname": "Ковалев", "country": "ru"}, {
    "firstName": "Виталия",
    "surname": "Бубко",
    "country": "ru"
  }, {"firstName": "Алексей", "surname": "Максимов", "country": "ru"}, {
    "firstName": "Антон",
    "surname": "Григорьев",
    "country": "ru"
  }, {"firstName": "Alexey", "surname": "Tarasenko", "country": "ru"}, {
    "firstName": "Евгений",
    "surname": "Шелухин",
    "photo": "http://i.imgur.com/2TXQ4lo.jpg",
    "country": "ru"
  }, {"firstName": "Денис", "surname": "Шавензов", "country": "ru"}, {
    "firstName": "Кислотник",
    "surname": "Чужой",
    "photo": "http://i.imgur.com/GbOFow3.jpg",
    "country": "ru"
  }]).delay(3000);

  constructor() {
  }

  ngOnInit() {
  }

}
