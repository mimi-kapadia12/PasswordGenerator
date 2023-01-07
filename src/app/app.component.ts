import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'PasswordGenerator'
  Length = 0;
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onButtonClick() {
    const Number = "123456789"
    const Letters = "abcdefghijklmnopqrstuvwxyz"
    const Symbols = "!@#$%^&*()_+"

    let varChar = ''

    if(this.includeLetters) varChar += Letters
    if(this.includeNumbers) varChar += Number
    if(this.includeSymbols) varChar += Symbols
    
    let generatedPassword = '';
    
    console.log(varChar)

    for(let i = 0 ; i < this.Length ; i ++)
    {
      const index = Math.floor(Math.random() * varChar.length);
      generatedPassword += varChar[index];
    }

    this.password = generatedPassword
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value)

    if (!isNaN(parsedValue)) this.Length = parsedValue
  }
}
