export const json = {
    "title": "Employee Information Form",
    "description": "An employee information form contains personal and job-related key information of who worked for the company. It can also be used as an emergency contact information form.",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "matrixdynamic",
            "minRowCount": 1,
            "rowCount": 1,
            "name": "employee_names",
            "valueName": "employees",
            "detailForm": "array_employee_info",
            "isRequired": true,
            "title": "Enter employee information",
            "addRowText": "Add Employee",
            "columns": [
              {
                "name": "name",
                "isRequired": true,
                "title": "Employee Name",
                "cellType": "text"
              }
            ]
          }
        ]
      },
      {
        "name": "page2",
        "elements": [
          {
            "type": "paneldynamic",
            "displayMode": "carousel",
            "allowAddPanel": false,
            "allowRemovePanel": false,
            "name": "array_employee_info",
            "titleLocation": "hidden",
            "valueName": "employees",
            "templateTitle": "Employee name: {panel.name}",
            "templateElements": [
              {
                "type": "panel",
                "name": "panel_employee_personal_info",
                "questionTitleLocation": "top",
                "elements": [
                  {
                    "type": "text",
                    "name": "employee_email",
                    "title": "Email",
                    "inputType": "email",
                    "valueName": "email"
                  },
                  {
                    "type": "text",
                    "name": "employee_address",
                    "valueName": "address",
                    "title": "Address"
                  },
                  {
                    "type": "text",
                    "name": "employee_phone",
                    "valueName": "phone",
                    "title": "Phone number"
                  },
                  {
                    "type": "text",
                    "name": "employee_ssn",
                    "valueName": "ssn",
                    "title": "Social Security Number (SSN)"
                  }
                ]
              },
              {
                "type": "panel",
                "name": "panel_employee_role",
                "title": "What is your role?",
                "questionTitleLocation": "top",
                "elements": [
                  {
                    "type": "radiogroup",
                    "choices": [
                      "Full time",
                      "Part time",
                      "Casual",
                      "Seasonal"
                    ],
                    "name": "employee_role",
                    "title": "Your role",
                    "valueName": "role"
                  }
                ]
              },
              {
                "type": "panel",
                "name": "panel_employee_hours_work",
                "title": "How many hours do you work?",
                "questionTitleLocation": "top",
                "elements": [
                  {
                    "type": "text",
                    "inputType": "number",
                    "name": "member_hours_worked",
                    "valueName": "hours_worked",
                    "title": "Hours:"
                  },
                  {
                    "type": "dropdown",
                    "name": "member_hours_worked_frequency",
                    "title": "Work Frequency:",
                    "valueName": "hours_worked_frequency",
                    "startWithNewLine": false,
                    "defaultValue": "Year",
                    "choices": [ "Day", "Week", "Fortnight", "Month", "Year" ]
                  }
                ]
              },
              {
                "type": "panel",
                "name": "panel_employee_income",
                "title": "What income do you receive?",
                "questionTitleLocation": "top",
                "elements": [
                  {
                    "type": "text",
                    "inputType": "number",
                    "name": "employee_income",
                    "valueName": "income",
                    "title": "Income:"
                  },
                  {
                    "type": "dropdown",
                    "name": "employee_income_frequency",
                    "title": "Income Frequency",
                    "valueName": "income_frequency",
                    "startWithNewLine": false,
                    "defaultValue": "Year",
                    "choices": [ "Day", "Week", "Fortnight", "Month", "Year" ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "page3",
        "title": "Review the result",
        "elements": [
          {
            "type": "matrixdynamic",
            "name": "employee_info",
            "allowAddRows": false,
            "allowRemoveRows": false,
            "valueName": "employees",
            "titleLocation": "hidden",
            "columns": [
              {
                "name": "name",
                "title": "Employee Name",
                "cellType": "text",
                "readOnly": true
              },
              {
                "name": "phone",
                "title": "Phone Number",
                "cellType": "text",
                "readOnly": true
              }
            ]
          }
        ]
      }
    ],
    "showQuestionNumbers": false
  };