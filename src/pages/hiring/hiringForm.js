// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
});

// ------ Algorithm for page navigation and checking of input fields --------//
    let currentPage = 1; // variable for determining form page number

    // Function for showing current form page
    function showPage(currentPageParam) {
        const page1 = $('#1');
        const page2 = $('#2');
        const page3 = $('#3');

        const nextBtn = $('#nextBtn');
        const prevBtn = $('#prevBtn');
        const submitBtn = $('#submitBtn');

        page1.fadeOut(400);
        page2.fadeOut(400);
        page3.fadeOut(400);

        if (currentPageParam === 1) {
            prevBtn.addClass('d-none');
            submitBtn.addClass('d-none');
            page1.fadeIn(400); // Fade in for page 1
        } else if (currentPageParam === 2) {
            nextBtn.removeClass('d-none');
            prevBtn.removeClass('d-none');
            submitBtn.addClass('d-none');
            page2.fadeIn(400); // Fade in for page 2
        } else if (currentPageParam === 3) {
            nextBtn.addClass('d-none');
            prevBtn.removeClass('d-none');
            submitBtn.removeClass('d-none');
            page3.fadeIn(400); // Fade in for page 3
        }
    }

    // Function for switching form pages
    function navigate(command) {
        var childDivCount = $('#emergencyContactContainer').children('div').length;

        if (currentPage === 1 && childDivCount !== 3) {
            // If currentPage is 1 and childDivCount is not 3, show modal
            $('#emptyFieldsModal').modal('show');
            console.log(childDivCount);
            return;
        } else if (command === 'next' && checkInput(currentPage)) {
            currentPage += 1;
            showPage(currentPage);
        } else if (command === 'prev') {
            currentPage -= 1;
            showPage(currentPage);
        } else {
            // Fallback else, show modal when inputs are not valid
            $('#emptyFieldsModal').modal('show');
        }

        console.log(childDivCount);
    }

    // Function to check if all inputs in a row are filled
    function checkInput(rowId) {
        let row = document.getElementById(rowId);
        // Get all input, select, and textarea elements inside the row
        let fields = row.querySelectorAll('input, select, textarea');
        let result = true;
    
        // Loop through the fields (input, select, textarea)
        for (let field of fields) {
            // Check if the field's parent has the 'd-none' class
            if (field.closest('.d-none')) {
                continue; // Skip the field if its parent has 'd-none'
            }
    
            if (field.type !== 'submit' && field.type !== 'button') {
                if (field.tagName.toLowerCase() === 'select') {
                    // Check if the select field has the default "--Select--" option
                    if (field.value === '--Select--') {
                        console.log(`Select field with name "${field.name}" has the default option.`);
                        result = false; // If a select is still at "--Select--", set result to false
                        break;
                    }
                } else if (field.type === 'radio') {
                    // Check if at least one radio button in the same name group is checked
                    let radioGroup = row.querySelectorAll(`input[name="${field.name}"]`);
                    let isChecked = Array.from(radioGroup).some(radio => radio.checked);
                    if (!isChecked) {
                        console.log(`Radio group with name "${field.name}" has no selected option.`);
                        result = false; // If none of the radio buttons are checked, set result to false
                        break;
                    }
                } else if (field.value.trim() === '') {
                    // For input and textarea, check if they're empty
                    console.log(`Field with name "${field.name}" is empty.`);
                    result = false; // If any input or textarea is empty, set result to false
                    break;
                }
            }
        }
    
        return result;
    }


// ----///

// --- Page 1 Functions --- ///
    // Function to add more emergency contact fields
    function addEmergencyDetails() {
    const div = $('#emergencyContactContainer');
    var childDivCount = $('#emergencyContactContainer').children('div').length;

    let content = `
        <div class="row border p-3 mb-3">
            <div class="col-lg-3 col-md-6 col-md-12 mb-3">
                <label for="">Name:</label>
                <input type="text" id="emergencyName${childDivCount + 1}" name="emergencyName${childDivCount + 1}" class="form-control">
            </div>

            <div class="col-lg-3 col-md-6 col-md-12 mb-3">
                <label for="">Relationship:</label>
                <input type="text" id="emergencyRelationship${childDivCount + 1}" name="emergencyRelationship${childDivCount + 1}" class="form-control">
            </div>

            <div class="col-lg-3 col-md-6 col-md-12 mb-3">
                <label for="">Address:</label>
                <input type="text" id="emergencyAddress${childDivCount + 1}" name="emergencyAddress${childDivCount + 1}" class="form-control">
            </div>

            <div class="col-lg-3 col-md-6 col-md-12 mb-3">
                <label for="">Contact:</label>
                <input type="text" id="emergencyContact${childDivCount + 1}" name="emergencyContact${childDivCount + 1}" class="form-control">
            </div>
        </div> 
    `;

    div.append(content);
    }

// --- Page 2 Functions --- ///
    // Function to show or hide college section 
    $('input[name="confirmCollegeGrad"]').change(function() {
        const collegeSection = $('#collegeSection');
        if($('#confirmCollegeGradYes').is(':checked')) {
            collegeSection.removeClass('d-none');
        } else if($('#confirmCollegeGradNo').is(':checked')) {
            collegeSection.addClass('d-none');
            collegeSection.find('input').val(''); // Clear all input values inside collegeSection
            // Reset all select elements to the first option
            collegeSection.find('select').each(function() {
                $(this).prop('selectedIndex', 0);
            });
        }
    });

    // Function to show or hide vocational section
    $('input[name="confirmVocational"]').change(function() {
        const vocationalSection = $('#vocationalSection');
        if($('#confirmVocationalYes').is(':checked')) {
            vocationalSection.removeClass('d-none');
        } else if($('#confirmVocationalNo').is(':checked')) {
            vocationalSection.addClass('d-none');
            vocationalSection.find('input').val('');
            // Reset all select elements to the first option
            vocationalSection.find('select').each(function() {
                $(this).prop('selectedIndex', 0);
            });
        }
    });
    
    // Function to show field of study
    $('#collegeLvl').change(function() {
        if ($(this).val() === 'masteral' || $(this).val() === 'doctoral') {
            // Show the postGrad section and clear any existing value
            $('#postGrad').removeClass('d-none').val('');
        } else {
            // Clear the value and hide the postGrad section
            $('#fieldStudy').val('')
            $('#postGrad').addClass('d-none');
        }
    });

    // Function to add more reference fields 
    function addReference() {
        const div = $('#referenceSection');
        const length = $(div).children('div').length

        let content = `
            <div class="row">
                <hr class="my-3">
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <label for="">Name:</label>
                    <input type="text" name="referenceName${length + 1}" id="referenceName${length + 1}" class="form-control rounded-0">
                </div>

                <div class="col-lg-3 col-md-6 col-sm-12">
                    <label for="">Occupation:</label>
                    <input type="text" name="referenceOccupation${length + 1}" id="referenceOccupation${length + 1}" class="form-control rounded-0">
                </div>

                 <div class="col-lg-3 col-md-6 col-sm-12">
                    <label for="">Address:</label>
                    <input type="text" name="referenceAddress${length + 1}" id="referenceAddress${length + 1}" class="form-control rounded-0">
                </div>

                <div class="col-lg-3 col-md-6 col-sm-12">
                    <label for="">Phone Number:</label>
                    <input type="text" name="referenceContact${length + 1}" id="referenceContact${length + 1}" class="form-control rounded-0">
                </div>
            </div>
        `;

        div.append(content);
    }

    // Function to add more fields in employment history
    function addEmploymentDetails() {
        const div = $('#employmentSection');
        const length = $(div).children('div').length

        let content = `
            <div class="row">
                <hr class="my-3">
                <div class="col-lg-2 col-md-6 col-sm-12">
                    <label for="">Company:</label>
                    <input type="text" name="HistoryCompany${length + 1}" id="HistoryCompany${length + 1}" class="form-control rounded-0">
                </div>

                <div class="col-lg-2 col-md-6 col-sm-12">
                    <label for="">Position:</label>
                    <input type="text" name="HistoryPosition${length + 1}" id="HistoryPosition${length + 1}" class="form-control rounded-0">
                </div>

                <div class="col-lg-2 col-md-6 col-sm-12">
                    <label for="">Start Date:</label>
                    <input type="date" name="HistoryEmpDateStart${length + 1}" id="HistoryEmpDateStart${length + 1}" class="form-control rounded-0">
                </div>

                <div class="col-lg-2 col-md-6 col-sm-12">
                    <label for="">End Date:</label>
                    <input type="date" name="HistoryEmpDateEnd${length + 1}" id="HistoryEmpDateEnd${length + 1}" class="form-control rounded-0">
                </div>

                <div class="col-lg-2 col-md-6 col-sm-12">
                    <label for="">Reason for Leaving</label>
                    <input type="text" name="HistoryLeaveReason${length + 1}" id="HistoryLeaveReason${length + 1}" class="form-control rounded-0">
                </div>

                <div class="col-lg-2 col-md-6 col-sm-12">
                    <label for="">Salary</label>
                    <input type="number" name="HistorySalary${length + 1}" id="HistorySalary${length + 1}" class="form-control rounded-0">
                </div>
            </div>
        `;

        div.append(content);
    }

// --- Page 3 Functions --- ///
    // Function to show operation details
    $('input[name="confirmOperation"]').change(function() {
        const operationDetails = $('#operationDetails');
        if($('#confirmOperationYes').is(':checked')) {
            operationDetails.removeClass('d-none');
        } else if($('#confirmOperationNo').is(':checked')) {
            operationDetails.addClass('d-none');
            operationDetails.find('input').val(''); // Clear all input values inside operationDetails
            operationDetails.find('textarea').val(''); // Clear all textarea values inside operationDetails
            // Reset all select elements to the first option
            operationDetails.find('select').each(function() {
                $(this).prop('selectedIndex', 0);
            });
        }
    });

    // Function to show pregnant month fields
    $('input[name="confirmPregnant"]').change(function() {
        const pregDetails = $('#isPregcontainer');
        if($('#confirmPregnantYes').is(':checked')) {
            pregDetails.removeClass('d-none');
        } else if($('#confirmPregnantNo').is(':checked')) {
            pregDetails.addClass('d-none');
            pregDetails.find('input').val('');
        }
    })

    // Initial submit
    function submitApplication() {
        console.log(currentPage);
        if(checkInput(currentPage) === true) {
            $('#confirmModal').modal('show');
        } else if(checkInput(currentPage) === false) {
            $('#emptyFieldsModal').modal('show');
        }

    }

    //  Final submit
    function finalSubmit() {
        $('#sendApplicationBtn').prop('disabled', true);
        $('.confirm-close').prop('disabled', true);
        $('#loader').removeClass('d-none');
        $('#applicationForm').submit();
    }

    // Submits data 
    $('#applicationForm').submit(function(e) {
        e.preventDefault();

        let submitData = {};
        let historyData = {};
        let referenceData = {};
        let emergencyData = {};
        
        // Sorts each data to put in submitData{}
        $(this).find('input, textarea').each(function() {
            const name = $(this).attr('name');
            let value;
        
            // For radio buttons, only get the selected one
            if ($(this).is(':radio')) {
                if ($(this).is(':checked')) {
                    value = $(this).val();
                    submitData[name] = value;
                    console.log(name, ' : ', value);
                }
            }
            // For checkboxes, only get checked ones
            else if ($(this).is(':checkbox')) {
                if ($(this).is(':checked')) {
                    value = $(this).val();
                    submitData[name] = value;
                    console.log(name, ' : ', value);
                }
            }
            // For text inputs and textareas, get the value directly
            else if ($(this).is('input') || $(this).is('textarea')) {
                value = $(this).val();
        
                // Check if the name starts with "History"
                if (name.startsWith("History")) {
                    // Clean up name (e.g. History Company1 => Company1)
                    const historyKey = name.replace('History ', '');
                    const number = historyKey.match(/\d+/); // Extract number
                    if (number) {
                        const historyObjKey = `history${number[0]}`;
                        if (!historyData[historyObjKey]) {
                            historyData[historyObjKey] = {};
                        }
                        historyData[historyObjKey][historyKey.replace(/\d+/g, '')] = value;
                    }
                }
                // Check if the name starts with "emergency"
                else if (name.startsWith("emergency")) {
                    // Clean up name (e.g. emergency Name1 1 => Name1)
                    const emergencyKey = name.replace('emergency ', '');
                    const number = emergencyKey.match(/\d+/); // Extract number
                    if (number) {
                        const emergencyObjKey = `emergencyName${number[0]}`;
                        if (!emergencyData[emergencyObjKey]) {
                            emergencyData[emergencyObjKey] = {};
                        }
                        emergencyData[emergencyObjKey][emergencyKey.replace(/\d+/g, '')] = value;
                    }
                }                
                // Check if the name starts with "reference"
                else if (name.startsWith("reference")) {
                    // Clean up name (e.g. emergency Name1 1 => Name1)
                    const referenceKey = name.replace('reference ', '');
                    const number = referenceKey.match(/\d+/); // Extract number
                    if (number) {
                        const referenceObjKey = `referenceName${number[0]}`;
                        if (!referenceData[referenceObjKey]) {
                            referenceData[referenceObjKey] = {};
                        }
                        referenceData[referenceObjKey][referenceKey.replace(/\d+/g, '')] = value;
                    }
                }else {
                    submitData[name] = value;  // Store other fields normally
                }
        
                console.log(name, ' : ', value);
            }
        });
        
        // Add the historyData and emergencyData to the main submitData object
        submitData.history = historyData;
        submitData.emergency = emergencyData;
        submitData.reference = referenceData;

        console.log(submitData);

        $.ajax({
            url: './send_verification.php', // Add fetch php script here 
            type: 'POST',
            data: submitData, 
            success: function(response) {
                console.log(response);

                // Nested ajax for email sending
                $.ajax({
                    url: './send_verificationV1.php', // Add fetch php script here 
                    type: 'POST',
                    data: {tk : response.token, emailAdd : response.email, uuid: response.uuid, firstName : response.fName, lastName : response.lName}, 
                    dataType: 'json',  // Tell jQuery to expect a JSON response
                    success: function(responseSMTP) {
                        console.log(responseSMTP.statusMail);  // Debugging step to check response
                        if(responseSMTP.statusMail === 'success') {
                            $('#confirmModal').modal('hide');
                            $('#successModal').modal('show');
                            console.log(responseSMTP);
                        } else {
                            $('#confirmModal').modal('hide');
                            $('#failedModal').modal('show');
                            console.log(responseSMTP);
                        }

                    },
                    error: function(xhr, status, error) {
                        $('#confirmModal').modal('hide');
                        $('#failedModal').modal('show');
                        console.error('Error: ', error);
                    }
                });
            },
            error: function(xhr, status, error) {
                $('#confirmModal').modal('hide');
                $('#failedModal').modal('show');
                console.error('Error: ', error);
            }
        });
    });

    // reloads page upon success or failed modal close
    $('.result-close').click(function() {
        location.reload();
    });

// On load ready function
$(document).ready(function() {
    const sessionPos = sessionStorage.getItem('posName');
    const positionField = $('#appliedPosition');

    console.log(sessionPos);

    positionField.val(sessionPos); // Populates first field page with selected position accodring to session var
    showPage(currentPage); // Call showpage to initialize the content
    
}); 