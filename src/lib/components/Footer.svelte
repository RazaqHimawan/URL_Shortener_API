<div class="top-footer">
  <div class="top-footer-content">
    <h2>Boost your links today</h2>
    <a href="#shorten">Get Started</a>
  </div>
</div>

<div class="bottom-footer">
  <h3>Shortly</h3>

  <div class="bottom-footer-content">
    <h4>Features</h4>
    <a href="#shorten">Link Shortening</a>
    <a href="/">Branded Links</a>
    <a href="/">Analytics</a>
  </div>

  <div class="bottom-footer-content">
    <h4>Resources</h4>
    <a href="/">Blog</a>
    <a href="/">Developers</a>
    <a href="/">Support</a>
  </div>
  <div class="bottom-footer-content">
    <h4>Company</h4>
    <a href="/">About</a>
    <a href="/">Our Team</a>
    <a href="/">Careers</a>
    <a href="/">Contact</a>
  </div>
  <div class="socials">
    <a href="https://www.facebook.com/stfus/">
      <img
        src="images/icon-facebook.svg"
        alt="facebook"
      />
    </a>
    <a href="/">
      <img
        src="images/icon-twitter.svg"
        alt="twitter"
      />
    </a>
    <a href="/">
      <img
        src="images/icon-pinterest.svg"
        alt="pinterest"
      />
    </a>
    <a href="/">
      <img
        src="images/icon-instagram.svg"
        alt="instagram"
      />
    </a>
  </div>
</div>

<style>
.top-footer {
  background: url(images/bg-boost-mobile.svg) no-repeat
    var(--color-primary-dark-violet);
  background-position: right;
  background-size: 100% 100%;

  padding: 5rem 2rem;
  text-align: center;
}

.top-footer-content {
  margin-top: 2rem;
}

h2 {
  color: var(--color-neutral-gray);
  font-size: 2rem;
}
.top-footer-content > a {
  cursor: pointer;
  display: inline-block;
  padding: 1rem 3rem;
  margin-block: 1.2rem;
  border: none;
  background: none;
  background-color: var(--color-primary-cyan);
  border-radius: 2.5rem;
  color: #fff;
  font-weight: 700;
  font-size: 1.5rem;
}

.bottom-footer {
  background-color: var(--color-neutral-very-dark-violet);
  color: var(--color-neutral-gray);
  text-align: center;
  padding: 3rem;
}

h3 {
  font-size: 2.5rem;
  user-select: none;
}

.bottom-footer-content {
  display: flex;
  flex-direction: column;
  margin: 2rem;
}

h4 {
  margin: 1rem;
}

a {
  text-decoration: none;
  color: var(--color-neutral-grayish-violet);
  margin: 0.4rem;
}

.socials {
  margin-top: 3rem;
}

.socials > a {
  margin: 0.7rem;
}

a:hover,
a:focus {
  color: var(--color-neutral-gray);
}

@media (min-width: 1000px) {
  .top-footer {
    background-image: url(images/bg-boost-desktop.svg);
  }

  .bottom-footer {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }

  .bottom-footer-content {
    margin-top: 0;
  }

  .socials {
    margin: 1.2rem;
  }
}
</style>
