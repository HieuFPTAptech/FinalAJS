import { Component } from '@angular/core';

@Component({
  selector: 'app-ToDo',
  templateUrl: './ToDo.component.html',
})
export class ToDoComponent {
  data = [
    {
      id: 'Task 1',
      desc: 'Analyze the new requirements gathered from the customer',
      'field ': 'to_do ',
    },
    {
      id: 'Task 3',
      desc: 'Arrange a web meeting with the customer to get new requirements',
      'field ': 'to_do ',
    },
    {
      id: 'Task 10',
      desc: 'Show the retrieved data from the server in grid control',
      'field ': 'to_do ',
    },
    {
      id: 'Task 20',
      desc: 'Enhance editing',
      'field ': 'to_do ',
    },
    {
      id: 'Task 6',
      desc: 'Improving quality',
      'field ': 'to_do',
    },
    {
      id: null,
      desc: null,
      'field ': null,
    },
    {
      id: null,
      desc: null,
      'field ': null,
    },
    {
      id: null,
      desc: null,
      'field ': null,
    },
    {
      id: null,
      desc: null,
      'field ': null,
    },
  ];
}
