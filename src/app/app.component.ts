import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faker } from '@faker-js/faker';
import { NgIf, NgForOf } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  randomText = faker.lorem.sentence();
  enteredText = '';
  solved = false;

  onInput(value:string){
    console.log(value);
    if(value === this.randomText){
      this.solved = true;
    }else{
      this.solved = false;
    }
    this.enteredText = value;
  }

  compare(randomLetter:string, enteredLetter: string){
    if(!enteredLetter){
      return 'pending';
    }
    
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
