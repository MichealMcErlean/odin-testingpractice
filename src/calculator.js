export const calculator = {
  add: function(a, b) {
    if (!(Number.isFinite(a) && Number.isFinite(b))) {
      return 'Oi! Jerk!';
    }
    return a + b;
  },
  subtract: function(a, b) {
    if (!(Number.isFinite(a) && Number.isFinite(b))) {
      return 'Oi! Jerk!';
    }
    return a - b;
  },
  divide: function(a, b) {
    if (!(Number.isFinite(a) && Number.isFinite(b))) {
      return 'Oi! Jerk!';
    }
    return a / b;
  },
  multiply: function(a, b) {
    if (!(Number.isFinite(a) && Number.isFinite(b))) {
      return 'Oi! Jerk!';
    }
    return a * b;
  }
}