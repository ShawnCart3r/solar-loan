function eligibilityStatus(state, householdSize, annualIncome) {
    const amiTable = {
      'Texas': [59710, 68240, 76770, 85300, 92124, 98948, 105772, 112596],
      'Rhode Island': [69510, 79440, 89370, 99300, 107244, 115188, 123132, 131076],
      'Massachusetts': [84280, 96320, 108360, 120400, 130032, 139664, 149296, 158928]
    };
  
    const householdIndex = householdSize - 1;
  
    if (annualIncome <= amiTable[state][householdIndex]) {
      return 'eligible';
    } else {
      return 'ineligible';
    }
  }
  

  /**This function uses the same approach as the Python function. 
   * It creates an object amiTable that contains the AMI values for each state and household size. 
   * It then uses the householdSize argument to determine the index of the AMI value to compare the annualIncome argument against. 
   * If the annualIncome argument is less than or equal to the AMI value, the function returns 'eligible'.
   *  Otherwise, it returns 'ineligible'
   */


  