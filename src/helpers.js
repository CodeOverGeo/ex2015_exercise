import React from 'react';

function choice(items) {
  let index = Math.floor(Math.random() * items.length);
  return items[index];
}

function remove(item, items) {
  let index = items.indexOf(item);
  if (index > -1) {
    return [...items.splice(0, index), ...items.slice(index + 1)];
  }
}

export { choice, remove };
