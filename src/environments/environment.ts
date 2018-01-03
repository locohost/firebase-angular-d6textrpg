// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	firebaseConfig: {
		apiKey: 'AIzaSyCCF93LwLh3Y17VA3zvbeNPmF7yxggWb_w',
		authDomain: 'fb-angular-d6textrpg.firebaseapp.com',
		databaseURL: 'https://fb-angular-d6textrpg.firebaseio.com',
		projectId: 'fb-angular-d6textrpg',
		storageBucket: 'fb-angular-d6textrpg.appspot.com',
		messagingSenderId: '89675414831'
	}
};
