# To Do Lists App

A To Do List app in which multiple lists can be created. Each list can renamed or deleted.

The items in each list can be checked/unchecked, edited or deleted. The list is split into outstanding items and completed items, based on whether or not an item has been checked. All of the items on a list can be deleted, as well as just the completed items.

The app has a dark mode option which can be toggled on or off.

The lists are saved to local storage. I appreciate that this is not a secure way to store data, and ideally this would be saved to a back-end with a user account, however this is beyond the scope of this front-end project.

## Issues I Encountered

It was challenging to make this layout fully responsive across different screen sizes. It is also one of the only projects I have done where I created the CSS for desktop first. I had to find a way for the list of to do list names to fit neatly on a mobile screen (without having to scroll too far down to view the actual list), which I achieved by adding a drop-down menu. I also had issues of the layout becoming to squished on smaller screens, so I added CSS to handle text overflow, and reduced the width of the item names on smaller screens.

I also had issues with the soft keyboard on Android devices. When the keyboard was opened to input text, the entire layout became squished, and buttons and text overflowed their containers. I eventually solved this by setting the overflow of the containers to hidden to prevent the contents from overflowing the container.

## Icon Attributions

The icons used in this app are Google Material Design Icons.
