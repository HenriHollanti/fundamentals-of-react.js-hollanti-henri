import styles from '../styles/Home.module.css'

function Home() {
    return (
        <div className={styles.content}>
            <main>
                <h2>The Home view:</h2>
                <p>
                    Contains only div- and p-elements. The first Route in the Layout component routes to the Home view.
                    Accessed via a Link-component in the NavBar-component. The last Route in Layout routes any routes not matched by the previous Route
                    instances to a NotFound component, which displays a 404 status error message.
                </p>
                <h2>The AddContact view:</h2>
                <p>
                    Has a child component ControlledForm, and two useState instances, one for the error component's visibility and one for its message. Inside the
                    ControlledForm-component, the state variable and state setter are passed as props from the Layout-component.
                    The setter is then used to update the state variable with 
                    the previous contents of the contacts array spread into a new array, with the new contact added to it.
                    The view is styled with a CSS-module.
                </p>
                <h2>The ContactList view:</h2>
                <p>
                    Gets an array of contact-objects passed to it as a prop from the Layout-component, where the contacts-array is stored in a useState.
                    The contacts are then mapped to custom ListRow component instances using an unique uuid as the key.
                    The unique uuids are generated using a 3rd-party 'uuid'-library.
                    The view is styled with a CSS-module, which stretches the li-items and makes them clickable, as well as adds some hover-coloring.
                    The individual ListRow instances each contain a Link component instance which is dynamically mapped to a path, which contains the element key.
                    They also contain ListCell component instances, which are used as a styled container to divide the individual rows into blocks.
                    For the name block in the ListRow components, On click, a function call is performed to a handler function with the contact id as the argument.
                    The function is passed as a prop from the Layout-component, where the contacts state is then searched 
                    for the correct contact by the contact id. This is then set to a useState of the current contact,
                    which is then passed as a prop to the ContactDetails-component.
                    
                </p>
                <br/>
                <p>
                    The rows also contain two buttons, one for deleting a contact and
                    one for editing it. On click, the edit button calls a setter, which toggles state for component visibility conditionally rendering a
                    custom Modal component instead of the contact list. The Modal component uses internally the same ControlledForm component,
                    which is used in the AddContact component. On click on the name block, the current contact is updated in a useState residing in Layout.
                    This is then passed as a prop to Modal, and its id property is passed as a prop to the ControlledForm inside the Modal component.
                    Inside, on submitting the form, a editing handler passed down from Layout is called, where current state of contacts is updated
                    by making a new array with the old contacts except for replacing the edited contact with the specific id property with the new contact.
                </p>
                <h2>The ContactDetails view:</h2>
                <p>
                    Displays the properties of a single contact-object passed to the component as a prop. The properties of the contacts are dislayed in an unordered list, each property having its own li-element.
                </p>
            </main>
        </div>
    )
}

export default Home;