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
          description: null,
          fields: {
            firstName: {
              type: `string`,
              title: `First Name`,
              placeholder: `Jane`,
              rules: [
                `required`,
              ],
            },
            lastName: {
              type: `string`,
              title: `Last Name`,
              placeholder: `Doe`,
              rules: [
                `required`,
              ],
            },
            email: {
              type: `string`,
              title: `Email Address`,
              placeholder: `janedoe@email.com`,
              rules: [
                `required`,
              ],
            },
            phoneNumber: {
              type: `tel`,
              title: `Phone Number`,
              placeholder: `(123)-456-7890`,
            },
          },
        },
      },
    },
    {
      title: `Billing Information`,
      description: `Give us your billing info!`,
      button: {
        label: `Complete Order`,
        type: `submit`,
        onSubmit: null,
      },
      fieldSets: {
        fundingSource: {
          title: `Funding Source Set`,
          fields: {
            fundingSource: {
              type: `dropdown`,
              title: `Funding Source`,
              options: [
                `Credit/Debit Card (Visa or Mastercard)`,
              ],
            },
          },
        },
        billingAddress: {
          title: `Billing Address`,
          description: null,
          fields: {
            addressLineOne: {
              type: `string`,
              title: `Address Line 1`,
              placeholder: `123 Main St.`,
              rules: [
                `required`,
              ],
            },
            addressLineTwo: {
              type: `string`,
              title: `Address Line 2`,
              placeholder: `Apt 2 (optional)`,
            },
            state: {
              type: `string`,
              title: `State`,
              placeholder: `CA`,
              rules: [
                `required`,
              ],
            },
            postalCode: {
              type: `string`,
              title: `Postal Code`,
              placeholder: `66210`,
              rules: [
                `required`,
              ],
            },
            country: {
              type: `string`,
              title: `Country`,
              placeholder: `United States`,
              rules: [
                `required`,
              ],
            },
            tshirtSize: {
              type: `dropdown`,
              title: `T-Shirt Size (For your investor kit)`,
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
        shippingAddress: {
          title: `Shipping Address`,
          description: null,
          fields: {
            addressLineOne: {
              type: `string`,
              title: `Address Line 1`,
              placeholder: `123 Main St.`,
              rules: [
                `required`,
              ],
            },
            addressLineTwo: {
              type: `string`,
              title: `Address Line 2`,
              placeholder: `Apt 2 (optional)`,
            },
            state: {
              type: `string`,
              title: `State`,
              placeholder: `CA`,
              rules: [
                `required`,
              ],
            },
            postalCode: {
              type: `string`,
              title: `Postal Code`,
              placeholder: `66210`,
              rules: [
                `required`,
              ],
            },
            country: {
              type: `string`,
              title: `Country`,
              placeholder: `United States`,
              rules: [
                `required`,
              ],
            },
          },
        },
        creditCardInfo: {
          title: `Credit Card Information`,
          description: `Please enter valid credit card information.`,
          fields: {
            creditCardNumber: {
              type: `number`,
              title: `Card Number`,
              placeholder: 1114444444444,
              rules: [
                `required`,
              ],
            },
            cvc: {
              type: `number`,
              title: `CVC Code`,
              placeholder: 123,
              rules: [
                `required`,
              ],
            },
            expirationMonth: {
              type: `number`,
              title: `Expiry Month`,
              rules: [
                `required`,
              ],
            },
            expirationYear: {
              type: `number`,
              title: `Expiry Year`,
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
