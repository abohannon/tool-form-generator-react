// TODO: Make this more extensible
const externalEventListener = () => {
  const elements = document.getElementsByName(`purchase[product_id]`)

  elements.forEach(element => element.addEventListener(`change`, () => {
    const { name, value } = element

    window.formComponent.handleExternalInput(name, value)
  }))
}

export default externalEventListener
