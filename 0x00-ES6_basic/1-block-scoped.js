export default function taskBlock(trueOrFalse) {
  const task = false;  // Use const
  const task2 = true;  // Use const

  if (trueOrFalse) {
    const task = true;  // These variables only exist in this block
    const task2 = false;
  }

  return [task, task2];  // Returns the outer values (false, true)
}

