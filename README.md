# dazaar-resolve

## API

#### `dr.addProvider(name, schema)`

```
*schema*
{
  resolve: async (name) => {
    ...
  },
  register: async (name, key) => {
    ...
  }
}
```

Example:

```
dr.addProvider('eos', ...)
```

#### `dr.delProvider(name)`

#### `await dr.resolve(name)`

#### `await dr.register(name, key)`
