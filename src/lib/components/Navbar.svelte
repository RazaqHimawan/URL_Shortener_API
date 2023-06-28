<script>
import Card from './Card.svelte';

let isOpen = false;
</script>

<svelte:window on:click={() => (isOpen = false)} />

<div class="nav">
  <div class="wrapper">
    <a href="/">
      <img
        src="images/logo.svg"
        alt="Shortly"
      />
    </a>

    <div class="nav-dt">
      <ul>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#resources">Resources</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="cta">
    <a href="#login">Login</a>
    <button class="sign">Sign Up</button>
  </div>
  <button
    id="hamburger"
    on:click|stopPropagation={() => (isOpen = !isOpen)}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
    >
      <path
        d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"
      />
    </svg>
  </button>
</div>

{#if isOpen}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    on:click|stopPropagation
    class="container"
  >
    <Card>
      <div class="nav-mobile">
        <div class="nav-mobile-content">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>
          <div class="divider" />
          <a href="#login">Login</a>
          <button class="sign-mobile">Sign Up</button>
        </div>
      </div>
    </Card>
  </div>
{/if}

<style>
.container {
  position: absolute;
  width: 100%;
}
.nav-mobile {
  background-color: var(--color-primary-dark-violet);
  padding: 2rem;
}

.nav-mobile-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nav-mobile-content > a {
  color: var(--color-neutral-gray);
  font-weight: 700;
  padding: 1rem;
  width: 100%;
  text-align: center;
}

.nav-mobile-content > a:hover {
  color: var(--color-neutral-grayish-violet);
}

.divider {
  border: 1px solid var(--color-neutral-grayish-violet);
  width: 100%;
  margin-block: 1rem;
}

.sign-mobile {
  padding: 1rem 2.5rem;
  background-color: var(--color-primary-cyan);
  border-radius: 2rem;
  color: #fff;
  font-weight: 700;
  font-size: var(--font-size-body);
  width: 100%;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.2rem;
}

button {
  cursor: pointer;
  border: none;
  background: none;
  outline: none;
}

svg {
  width: 48px;
  height: 48px;
  fill: var(--color-neutral-grayish-violet);
}

.nav-dt {
  display: none;
}

.cta {
  display: none;
}

a {
  text-decoration: none;
  color: var(--color-neutral-grayish-violet);
  font-weight: 700;
}

@media (min-width: 1000px) {
  .nav {
    margin-inline: 5rem;
    justify-content: space-between;
  }
  #hamburger {
    display: none;
  }

  .wrapper {
    display: flex;
  }

  .nav-dt {
    display: flex;
    align-items: center;
    margin-left: 3rem;
  }

  ul {
    display: flex;
    gap: 1.5rem;
  }

  li {
    display: flex;
  }

  .cta {
    display: flex;
    align-items: center;
  }
  .cta > a {
    margin-right: 2rem;
  }

  .cta > button {
    padding: 0.5rem 2rem;
    background-color: var(--color-primary-cyan);
    border-radius: 2rem;
    color: #fff;
    font-weight: 700;
    font-size: var(--font-size-body);
  }
}
</style>
