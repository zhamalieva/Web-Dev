def xyz_there(str):
  """
  Return True if the given string contains an appearance of "xyz" where 
  the xyz is not directly preceeded by a period (.). So "xxyz" counts but
  "x.xyz" does not. 
  """
  i=0
  while "xyz" in str[i:]:
    if str[i-1+str[i:].index("xyz")] != ".":
      return True
    i += str[i:].index("xyz")+2
  return False
