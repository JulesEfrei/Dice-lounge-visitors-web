# Dice Lounge Visitor (Web version)

A multi-OS mobile app that allows users to create a profile and then engage in a number of activities such as: book tables, find a group, browse the catalogue, take advantage of special offers, order food, view upcoming events, “check-in” to the venue(s), post photos, and earn badges for procedurally-generated "achievements". These achievements will refresh periodically to entice the user to engage more with the venue. The app should integrate with the various systems already in use at the venue, e.g. the booking system. 

# Dev convention

### Languages

- React
- Sass (.scss)

### Assets

All the static assets are in the `public` folder and are imported as a root file (Feature of Vite Js)
Then, all sensible assets are in the `src/assets` folder.

### Routing

Because our application works only if the user is connected, we need to check every time if the user is connected. So we first have "both routers", one for the classic routing when the user is connected and the second when the user is not connected (Login & Register pages for example). Both routers are rendered in a wrapper that conditionally renders one router or another.

### Styles

For basic components (all except layout components or main pages), we use the `.module.scss` extension. It scopes the style to one component. So we can use the same className for different components witthout breaking another one.

Naming of className => snake_case
Naming of style files => Same as the component without in camelCase. (Ex: for `Home.jsx` => `home.module.scss`)

### File naming 

Naming of component files => PascalCase (Ex: `HomePage.jsx`)
Naming of style files => Same as the component without in camelCase. (Ex: for `HomePage.jsx` => `homePage.module.scss`)

### File organisation

All in `src` folder.

Fonction that can be reused like form validation can be in separated file in `src/utils` folder. 

Because of Sass, we would use global variables. We also put it in the `src/utils` folder as `variables.scss`.
Then we can import it with the following line:

```scss
@use ".../../utils/variables.scss // => Path

h1 {
    color: variables.$primary-color
}
```

For components and pages, we put all these in the `src/components` folder (We can put the pages outside the `src/components` and create an `src/pages` folder if you prefer). For each folder inside the `components` folder, we have another one for the style (Ex: `src/components/atoms` with all `.jsx` files and `src/components/atoms/styles` with all `.scss` files).

### Branches

The `main` branch is the production branch. This means that we only push the released version of the application on it. It's this branch that will be deployed. 

The `dev` branch is the development branch. We push new features on it and we test our application on this branch before merging it into the main branch. Generally, we only merge a branch to this one and we never push code directly on it.

Then, we have `"features"` branch (Ex: Authentification, HomePage, Reservation, etc). These are feature branches. We code and push code only on these branches. When the feature is finished, we merge them to the `dev` branch to test them and approve them.

### Reminder GitHub Command

Usefull command:

```bash
# Change branch
git checkout -b <branch-name>
```

Push code:

```bash
# Add your code in the next commit
git add .

# Create the commit and the message's commit
git commit -m "New Commit"

# Push the code to the remote repository
git push -u origin <branch-name> 
```

Full example:

I've coded the authentification features and I would push my code on GitHub.

```bash
cd "path/project"

git checkout -b dev-auth

git add .
git commit -m "Add : Authentification features"
git push -u origin dev-auth
```