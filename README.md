# Lazy

<p align="center">
    <span>A small wrapper class for lazy computed values.</span>
    <br><br>
    <a href="https://app.codecov.io/gh/felix-kaestner/lazy/">
        <img alt="Codecov" src="https://img.shields.io/codecov/c/github/felix-kaestner/lazy?color=29b6f6&style=flat-square&token=G0HFHGFM94">
    </a>
    <a href="https://github.com/felix-kaestner/lazy/issues">
        <img alt="Issues" src="https://img.shields.io/github/issues/felix-kaestner/lazy?color=29b6f6&style=flat-square">
    </a>
    <a href="https://github.com/felix-kaestner/async/blob/main/LICENSE">
        <img alt="License" src="https://img.shields.io/github/license/felix-kaestner/async?color=29b6f6&style=flat-square">
    </a>
</p>

## Install

Install with `npm` or `yarn`:

```
$ npm i git+https://github.com/felix-kaestner/lazy
```

```
$ yarn add git+https://github.com/felix-kaestner/lazy
```

## Usage

Generate a lazy computed value which is memoized once it is computed.

```JavaScript
import Lazy from '@felix-kaestner/lazy'

const lazy = new Lazy(() => {
    // Do some computation which should be run lazily when needed and then memoized
    // ...
    return 42
})


// Retrieve the value from the instance
// using the `value` property
console.log(lazy.value)
```

**TypeScript**

The `Lazy` class accepts a generic type parameter.

```TypeScript
import Lazy from '@felix-kaestner/lazy'

const lazy = new Lazy<number>(() => {
    // ...
    return 42
})
```

---

Released under the [MIT License](LICENSE).
