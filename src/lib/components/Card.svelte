<div>
  <slot />
</div>

<style>
div {
  border-radius: 10px;
  margin-inline: 2rem;
  overflow: hidden;
}

@media (min-width: 1000px) {
  div {
    margin-inline: 6rem;
  }
}
</style>
