def end_other(a, b):
  """
  Given two strings, return True if either of the strings appears at the very 
  end of the other string, ignoring upper/lower case differences (in other 
  words, the computation should not be "case sensitive").
  """
  long_s, short_s = (a,b) if len(a) >= len(b) else (b,a)
  return long_s.lower().endswith(short_s.lower())