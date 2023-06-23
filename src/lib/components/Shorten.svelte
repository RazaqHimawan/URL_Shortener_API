<form>
  <input
    type="text"
    placeholder="Shorten a link here..."
  />
  <button>Shorten It!</button>
</form>

<style>
form {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;

  background: url(images/bg-shorten-mobile.svg) var(--color-primary-dark-violet)
    no-repeat top right;
  background-size: 290px 150px;
}

input,
button {
  padding: 1rem;
  border-radius: 10px;
  border: none;
}

input {
  font-size: var(--font-size-body);
  font-weight: 700;
  color: var(--color-neutral-grayish-violet);
}

button {
  cursor: pointer;
  background-color: var(--color-primary-cyan);
  color: #fff;
  font-weight: 700;
  font-size: var(--font-size-body);
  margin-top: 1.2rem;
}
</style>
