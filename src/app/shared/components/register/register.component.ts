import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: ''
  };

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit() {
    // Chame o serviço de autenticação para fazer a solicitação de registro
    this.authService.register(this.user).subscribe(
      (response) => {
        // Handle a successful registration here
        console.log(response);
        // Redirecionar para a página de dashboard ou para onde desejar após o registro bem-sucedido
        this.router.navigate(['app/dashboard']);
      },
      (error) => {
        // Handle registration error here, como exibir uma mensagem de erro.
        console.error(error);
      }
    );
  }
}
