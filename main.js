function checkEligibility() {
    const state = document.getElementById("state").value;
    const householdSize = parseInt(document.getElementById("household-size").value);
    const annualIncome = parseFloat(document.getElementById("annual-income").value);
    const eligibility = getEligibility(state, householdSize, annualIncome);
    document.getElementById("eligibility").innerHTML = `Eligibility: ${eligibility}`;
  }

  function getEligibility(state, householdSize, annualIncome) {
    const amiTable = {
      "Texas": [59710, 68240, 76770, 85300, 92124, 98948, 105772, 112596],
      "Rhode Island": [69510, 79440, 89370, 99300, 107244, 115188, 123132, 131076],
      "Massachusetts": [84280, 96320, 108360, 120400, 130032, 139664, 149296, 158928]
    };
    const householdIndex = householdSize - 1;
    const ami = amiTable[state][householdIndex];
    if (annualIncome <= ami) {
      return "eligible";
    } else {
      return "ineligible";
    }
  }
  

  /**This function uses the same approach as the Python function. 
   * It creates an object amiTable that contains the AMI values for each state and household size. 
   * It then uses the householdSize argument to determine the index of the AMI value to compare the annualIncome argument against. 
   * If the annualIncome argument is less than or equal to the AMI value, the function returns 'eligible'.
   *  Otherwise, it returns 'ineligible'
   */


  