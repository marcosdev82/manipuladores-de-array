Array.fromAsync(items)
Array.fromAsync(items, mapFn)
Array.fromAsync(items, mapFn, thisArg)

const result = [];
for await (const element of items) {
  result.push(element);
}