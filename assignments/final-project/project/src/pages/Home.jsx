function Home() {
    return (
        <div>
            <h1>The Home view:</h1>
            <p>
                Contains only div- and p-elements. The first Route in the Layout component routes to the Home view.
                Accessed via a Link-component in the NavBar-component.
            </p>
            <h1>The AddContact view:</h1>
            <p>
                Has a child component ControlledForm, and two useState instances, one for the error component's visibility and one for its message. Inside the
                ControlledForm-component, the state variable and state setter are passed as props from the Layout-component.
                The setter is then used to update the state variable with 
                the previous contents of the contacts array spread into a new array, with the new contact added to it.
                The view is styled with a CSS module.
            </p>
            <h1>The ContactList view:</h1>
            <p>
                Gets an array of contact-objects passed to it as a prop from the Layout-component, where the contacts-array is stored in a useState.
                The contacts are
                then mapped to li-elements inside an unordered list, using an unique uuid as the key.
                The unique uuids are generated using a 3rd-party 'uuid'-library.
                The view is styled with a CSS-module, which stretches the li-items and makes them clickable, as well as adds some hover-coloring.
                The individual li-elements each contain a NavLink-component, which is dynamically mapped to a path, which contains the element key.
                On click, a function call is performed to a handler function with the contact id as the argument.
                The function is passed as a prop from the Layout-component, where the contacts state is then searched 
                for the correct contact by the contact id. This is then set to a useState of the current contact,
                which is then passed as a prop to the ContactDetails-component.
            </p>
            <h1>The ContactDetails view:</h1>
            <p>
                Displays the properties of a single contact-object passed to the component as a prop. The ContactDetails component
                utilizes conditional rendering via a ternary operator. If the prop-contact is null, the NotFound-component is returned.
                Otherwise, the properties of the contacts are dislayed in an unordered list, each property having its own li-element.
            </p>
        </div>
    )
}

export default Home;