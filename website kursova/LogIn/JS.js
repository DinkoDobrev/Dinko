$("#registerForm").validate({
	rules: {
		"usr" : {
			minlength : 6,
			required: true
		},
        
		"pass": {
			required: true,
			minlength : 6,
			maxlength : 20,
			digit: true
		},

		"rPass": {
			required: true,
			equalTo: "#exampleInputPassword"
		}
	}
    
    
    function submitClick() {
        if (formValidation()) {
          alert("Thank you for your time! Your details have been submitted!");
          return true;
        } else {
          return false;
        }
      }
});


jQuery.validator.addMethod("digit", function(value, element) {
	for (let i = 0; i < value.length; i++) {
		let currentSymbol = value[i].charCodeAt();
		let isDigit = (48 <= currentSymbol && currentSymbol <= 57);
		if(isDigit) {
			return true;
		}
	}
	return false;
}, "Enter at least one  digit!"
) 