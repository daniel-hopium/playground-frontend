import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Field, email, form, required } from '@angular/forms/signals';

import { HlmFormFieldImports } from '@spartan-ng/helm/form-field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmButtonImports } from '@spartan-ng/helm/button';

type LoginData = {
  email: string;
  password: string;
};

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [Field, HlmFormFieldImports, HlmInputImports, HlmButtonImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  // 1) Form model (single source of truth)
  readonly loginModel = signal<LoginData>({
    email: '',
    password: '',
  });

  // 2) Field tree + validation schema
  readonly loginForm = form(this.loginModel, (schema) => {
    required(schema.email, { message: 'Email ist erforderlich' });
    email(schema.email, { message: 'Bitte eine gültige Email eingeben' });

    required(schema.password, { message: 'Passwort ist erforderlich' });
  });

  readonly submitting = signal(false);

  async onSubmit(event: Event) {
    event.preventDefault();

    // Optional: nur submitten, wenn valid
    if (!this.loginForm().valid()) {
      return;
    }

    this.submitting.set(true);
    try {
      const { email, password } = this.loginModel();
      // TODO: Auth call (service)
      console.log('login', { email, password });
    } finally {
      this.submitting.set(false);
    }
  }
}
