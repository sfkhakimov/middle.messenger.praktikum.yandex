import Block from '../../../../common/components/Block';
import Input from '../../Input';
import {Form} from "../../../../common/components/Form";
import compile from '../../../../common/utils/compile';
import { template } from './template';

import './style.css';

export default class FormSignUp extends Block {
  constructor(props) {
    super({
      ...props,
      form: new Form({
        formName: 'signup',
        title: 'Регистрация',
        buttonText: 'Зарегистрироваться',
        isRenderLink: true,
        href: '/signin.html',
        linkTitle: 'Уже зарегистрированы?',
        content: [
          new Input({
            labelName: 'E-mail',
            inputName: 'email',
            type: 'text',
          }),
          new Input({
            labelName: 'Логин',
            inputName: 'login',
            type: 'text',
          }),
          new Input({
            labelName: 'Имя',
            inputName: 'firstName',
            type: 'text',
          }),
          new Input({
            labelName: 'Фамилия',
            inputName: 'lastName',
            type: 'text',
          }),
          new Input({
            labelName: 'Телефон',
            inputName: 'phone',
            type: 'text',
          }),
          new Input({
            labelName: 'Пароль',
            inputName: 'password',
            type: 'password',
          }),
          new Input({
            labelName: 'Пароль еще раз',
            inputName: 'passwordAgain',
            type: 'password',
          }),
        ]
      }),
      events: {
        submit: (e: HTMLFormElement) => this.onSubmit(e),
      },
    });
  }

  onValid(form: FormData) {
    let isValidForm = true;
    const { form: formSignIn } = this.props

    formSignIn.props.content.forEach(item => {

      item.onUpdate(item.props.inputName, form[item.props.inputName]);
      if (!item.props.isValid) {
        isValidForm = false;
      }

    })
    return isValidForm;
  }

  onSubmit(e: HTMLFormElement) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const form = {
      email: formData.get('email'),
      login: formData.get('login'),
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      phone: formData.get('phone'),
      password: formData.get('password'),
      passwordAgain: formData.get('passwordAgain'),
    };

    if (!this.onValid(form)) return;
    console.log(form);
  }

  render() {
    const {
      form
    } = this.props;
    const element = compile(template, {
      form
    });

    return element;
  }
}
