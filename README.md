# markey-box

Massachusetts dropbox location finder for Ed Markey.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Local Development

Requires the latest stable version of [NodeJS](https://nodejs.org/) (12>).

```sh
$ npm install
$ npm run dev
```

## Updating dropbox locations

All dropbox locations are sourced from the `locations.csv` file in the `bin` folder. To import your own ballot dropbox list, make sure it has the following columns,

- Address
- City/town
- Zip
- Dropbox instructions

You'll likely need to update `bin/build-ballot-list.js` to have the proper column numbers for your csv.

Once your ready to import dropbox data, run the following,

```sh
$ node bin/build-ballot-list.js
$ npm run dev

# Confirm the new data looks correct

$ git add .
$ git commit -m "updated location data"
$ git push origin master

# Deploy your site
```

## Customizing the design & copy

You'll likely need a few hours from a frontend developer to make the changes necessary, but here is a short list of where to start:

- Update `src/Homepage` to have a different Hero image and copy
- Update `src/Nav` to have a different logo
- Update `src/TownPage` to have a different photo and copy
- Update `src/Footer` to have different Q&A copy and disclaimer

## Deployment

To save time for the Ed Markey campaign, we lazily reused our existing Heroku account and just made a quick Express server to serve a static site. However, this site could easily be deployed with [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/), or any other static site provider.

To create a static build, just run the following,

```ssh
$ npm run build
```
