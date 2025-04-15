class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'Email E-mail Confirm E-mail' });
    this.usernameInput = page.getByRole('textbox', { name: 'Email E-mail Confirm E-mail' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password Password' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password Password' });
    this.signInButton = page.getByRole('button', { name: 'Log In' });

  
  }

  async gotoLoginPage() {
    await this.page.goto('https://v1prepaid.smhrp01.app/admin');
  }
  
  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.signInButton.click();

    }
  }


module.exports = { LoginPage };