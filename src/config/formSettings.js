import { emailRegex } from './validation'


export default {
  title: `Equity Form`,
  description: `A form for selling that equity`,
  steps: [
    {
      title: `Contact Information`,
      description: `Give us your contact info`,
      button: {
        label: `Continue`,
        type: `button`,
      },
      fieldSets: {
        contactInformation: {
          title: `Contact Info Set`,
          name: `contactInfo`,
          description: null,
          fields: {
            firstName: {
              type: `text`,
              name: `firstName`,
              label: `First Name`,
              placeholder: `Jane`,
              rules: [
                `required`,
              ],
              validation: {
                message: 'First name is required'
              }
            },
            lastName: {
              type: `text`,
              name: `lastName`,
              label: `Last Name`,
              placeholder: `Doe`,
              rules: [
                `required`,
              ],
              validation: {
                message: 'Last name is required'
              }
            },
            email: {
              type: `email`,
              name: `emailAddress`,
              label: `Email Address`,
              placeholder: `janedoe@email.com`,
              rules: [
                `required`,
              ],
              validation: {
                regex: emailRegex,
                message: 'A valid email address is required'
              }
            },
            phoneNumber: {
              type: `tel`,
              name: `phoneNumber`,
              label: `Phone Number`,
              placeholder: `(123)-456-7890`,
            },
          },
        },
      },
    },
    {
      title: `Billing Information`,
      name: `billingInfo`,
      description: `Give us your billing info!`,
      button: {
        label: `Complete Order`,
        type: `submit`,
        onSubmit: null,
      },
      fieldSets: {
        fundingSource: {
          title: `Funding Source Set`,
          name: `fundingSource`,
          fields: {
            fundingSource: {
              type: `select`,
              name: `fundingSource`,
              label: `Funding Source`,
              options: [
                `Credit/Debit Card (Visa or Mastercard)`, `Amex`,
              ],
            },
          },
        },
        shippingAddress: {
          title: `Shipping Address`,
          name: `shippingAddress`,
          description: null,
          fields: {
            addressLineOne: {
              type: `text`,
              name: `shippingAddressLine1`,
              label: `Address Line 1`,
              placeholder: `123 Main St.`,
              rules: [
                `required`,
              ],
            },
            addressLineTwo: {
              type: `text`,
              name: `shippingAddressLine2`,
              label: `Address Line 2`,
              placeholder: `Apt 2 (optional)`,
            },
            state: {
              type: `text`,
              name: `shippingState`,
              label: `State`,
              placeholder: `CA`,
              rules: [
                `required`,
              ],
            },
            postalCode: {
              type: `text`,
              name: `shippingPostalCode`,
              label: `Postal Code`,
              placeholder: `66210`,
              rules: [
                `required`,
              ],
            },
            country: {
              type: `text`,
              name: `shippingCountry`,
              label: `Country`,
              placeholder: `United States`,
              rules: [
                `required`,
              ],
            },
          },
        },
        billingSameAsShipping: {
          name: `billingSame`,
          fields: {
            billingSame: {
              type: 'checkbox',
              name: 'billingSame',
              label: 'Billing address same as shipping address',
              target: 'billingAddress',
              checked: true,
            },
          }
        },
        billingAddress: {
          title: `Billing Address`,
          name: `billingAddress`,
          description: null,
          transition: 'collapse',
          fields: {
            addressLineOne: {
              type: `text`,
              name: `billingAddressLine1`,
              label: `Address Line 1`,
              placeholder: `123 Main St.`,
              rules: [
                `required`,
              ],
            },
            addressLineTwo: {
              type: `text`,
              name: `billingAddressLine2`,
              label: `Address Line 2`,
              placeholder: `Apt 2 (optional)`,
            },
            state: {
              type: `text`,
              name: `billingState`,
              label: `State`,
              placeholder: `CA`,
              rules: [
                `required`,
              ],
            },
            postalCode: {
              type: `text`,
              name: `billingPostalCode`,
              label: `Postal Code`,
              placeholder: `66210`,
              rules: [
                `required`,
              ],
            },
            country: {
              type: `text`,
              name: `billingCountry`,
              label: `Country`,
              placeholder: `United States`,
              rules: [
                `required`,
              ],
            },
            tshirtSize: {
              type: `select`,
              name: `shirtSize`,
              label: `T-Shirt Size (For your investor kit)`,
              options: [
                `Small`,
                `Medium`,
                `Large`,
                `X-Large`,
                `XX-Large`,
              ],
              rules: [
                `required`,
              ],
            },
          },
        },
        creditCardInfo: {
          title: `Credit Card Information`,
          name: `creditCardInfo`,
          description: `Please enter valid credit card information.`,
          fields: {
            creditCardNumber: {
              type: `number`,
              name: `cardNumber`,
              label: `Card Number`,
              placeholder: 1114444444444,
              rules: [
                `required`,
              ],
            },
            cvc: {
              type: `number`,
              name: `cvcCode`,
              label: `CVC Code`,
              placeholder: 123,
              rules: [
                `required`,
              ],
            },
            expirationMonth: {
              type: `number`,
              name: `expiryMonth`,
              label: `Expiry Month`,
              rules: [
                `required`,
              ],
            },
            expirationYear: {
              type: `number`,
              name: `expiryYear`,
              label: `Expiry Year`,
              rules: [
                `required`,
              ],
            },
          },
        },
      },
    },
  ],
}
