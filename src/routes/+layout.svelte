<script lang="ts">
	import '../app.postcss';
	import './styles.css';
	import { browser } from '$app/environment';

	// Para o konstaui, porque o Ionic já determina o modo escuro a partir de prefers-color-scheme automaticamente (theme/variables.css)
	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<slot />
