<script lang="ts">
	import { Page, Navbar, Block, Button, List, ListItem, BlockTitle } from 'konsta/svelte';
</script>

<Page>
	<Navbar title="My App" />

	<Block strong>
		<p>Here is your SvelteKit & Konsta UI app. Let's see what we have here.</p>
	</Block>
	<BlockTitle>Navigation</BlockTitle>
	<List>
		<ListItem href="/about/" title="About" />
		<ListItem href="/form/" title="Form" />
	</List>
	<ion-card>
		<ion-card-header>
			<ion-card-subtitle>Great success!!</ion-card-subtitle>
			<ion-card-title>Welcome to your app!</ion-card-title>
		</ion-card-header>

		<ion-card-content>
			Thank you for using this starter. Click buttons below to open these guides (will open in new
			window). Don't forget to open DevTools to see this app in mobile mode. Happy coding!!!
		</ion-card-content>

		<ion-item>
			<ion-label>Visit Ionic Showcase app with sourceviewer</ion-label>
			<ion-button
				href="https://ionicsvelte.firebaseapp.com/"
				target="_new"
				fill="outline"
				slot="end">View</ion-button
			>
		</ion-item>

		<ion-item>
			<ion-label>Visit Ionic component docs</ion-label>
			<ion-button
				href="https://ionicframework.com/docs/components"
				target="_new"
				fill="outline"
				slot="end">View</ion-button
			>
		</ion-item>
		<ion-item>
			<ion-label>Visit Svelte Kit docs</ion-label>
			<ion-button
				href="https://kit.svelte.dev/docs/introduction"
				target="_new"
				fill="outline"
				slot="end">View</ion-button
			>
		</ion-item>
		<ion-item>
			<ion-label>Visit Svelte docs</ion-label>
			<ion-button href="https://svelte.dev/docs" target="_new" fill="outline" slot="end"
				>View</ion-button
			>
		</ion-item>
	</ion-card>

	<Block strong class="flex space-x-4">
		<Button>Button 1</Button>
		<Button>Button 2</Button>
	</Block>
</Page>
