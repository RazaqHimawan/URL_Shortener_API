<section>
  <img
    src="/images/illustration-working.svg"
    alt=""
  />

  <div>
    <h1>More than just shorter links</h1>
    <p
      >Build your brand's recognition and get detailed insights on how your
      links are performing.</p
    >
    <a href="#shorten">Get Started</a>
  </div>
</section>

<style>
section {
  overflow: hidden;
}

img {
  width: 550px;
  padding-inline: 2rem;
}

div {
  text-align: center;
  margin: 2rem 1rem;
}

h1 {
  font-size: 3rem;
  color: var(--color-neutral-very-dark-blue);
}

p {
  color: var(--color-neutral-grayish-violet);
  margin-block: 0.5rem;
  line-height: 1.8rem;
}

a {
  cursor: pointer;
  display: inline-block;
  padding: 1rem 2.5rem;
  margin-block: 1.2rem;
  border: none;
  background: none;
  background-color: var(--color-primary-cyan);
  border-radius: 2rem;
  color: #fff;
  font-weight: 700;
  font-size: var(--font-size-body);
  text-decoration: none;
}

a:hover,
a:focus {
  color: var(--color-neutral-gray);
}

@media (min-width: 1000px) {
  section {
    display: flex;
    flex-direction: row-reverse;
  }

  img {
    object-fit: contain;
  }

  div {
    text-align: left;
    margin-left: 6rem;
  }
}
</style>
