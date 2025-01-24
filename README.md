# Unexpected Variable Shadowing with `let` in JavaScript

This example demonstrates how JavaScript's block scope with the `let` keyword can lead to unexpected behavior due to variable shadowing.  The inner `let x = 20;` declaration creates a new variable `x` that is only visible within the `if` block, not affecting the outer `x` variable.

**Key takeaway:** Be mindful of variable names when using `let` within nested blocks to prevent accidental shadowing.