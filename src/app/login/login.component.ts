import { Component, NgModule  } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
  username: '',
  password: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    // Aqui você pode adicionar a lógica para fazer uma solicitação de login ao serviço de autenticação.
    // Você pode usar um serviço de autenticação que lida com a comunicação com o backend.

    // Exemplo de redirecionamento após um login bem-sucedido:
    if (/* Lógica de autenticação bem-sucedida */ 1 ==1 ) {
      this.router.navigate(['/dashboard']); // Redirecionar para a página de dashboard ou para onde desejar.
    } else {
      // Lógica para lidar com o login malsucedido, como exibir uma mensagem de erro.
    }
  }

}
