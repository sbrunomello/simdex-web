import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
  };

  onSubmit() {
    // Implemente a lógica para registrar o usuário
    // Isso pode envolver fazer uma solicitação HTTP para o backend.
  }

}
