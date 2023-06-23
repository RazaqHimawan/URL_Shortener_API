<script>
import '../app.css';
import Jumbotron from '$lib/components/Jumbotron.svelte';
import Navbar from '../lib/components/Navbar.svelte';
import Footer from '$lib/components/Footer.svelte';
</script>

<header>
  <Navbar />
  <Jumbotron />
</header>

<main>
  <slot />
</main>

<footer>
  <Footer />
</footer>

<style>
header {
  margin-bottom: 10rem;
}
main {
  background-color: var(--color-neutral-gray);
}
</style>
