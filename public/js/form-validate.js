$('.ui.form')
  .form({
    fields: {
      username: {
        identifier: 'username',
        rules: [
          {
            type: 'empty',
            prompt: 'Please enter your username'
          }
        ]
      },
      email: {
        identifier: 'email',
        rules: [
          {
            type: 'empty',
            prompt: 'Please provide a valid email'
          }
        ]
      },
      password: {
        identifier: 'password',
        rules: [
          {
            type: 'empty',
            prompt: 'Please enter a password'
          },
          {
            type: 'minLength[6]',
            prompt: 'Your password must be at least {ruleValue} characters'
          }
        ]
      },
      firstName: {
        identifier: 'firstName',
        rules: [
          {
            type: 'empty',
            prompt: 'Please provide first name'
          }
        ]
      },
      lastName: {
        identifier: 'lastName',
        rules: [
          {
            type: 'empty',
            prompt: 'Please provide last name'
          }
        ]
      }
    }
  })
;