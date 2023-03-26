def same_first_last(nums):
  """
  Given an array of ints, return True if the array is length 1 or more, and the
  first element and the last element are the same.
  """
  return len(nums) > 0 and nums[0] == nums[-1]
