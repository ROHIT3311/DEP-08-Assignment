// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric.

enum CardinalDirections {
  North,
  East,
  South,
  West,
}
// If you hover any constant from above example you will get index or iterator of it

enum CardinalDirections2 {
  North = 1,
  East,
  South,
  West,
}
// If we decalred any index for a constant, then below constant will follow the series.
// Like for above we have decalred 1 for north then below 3 of it will be having 2 3 4

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}
// For each different index or values;

enum CardinalDirections3 {
  North = "North",
  East = "East",
  South = "South",
  West = "West",
}
