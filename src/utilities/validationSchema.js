//This file will house the schemas for both resources and categories for the create/edit form.
//To bring in a simple validation implementation, we are going to use Yup by installing it in
//our app (npm install yup) see implementation below

//Yup will work in tandem with Formik, which is an npm package that creates and stores form
//inputs for each item (categoryName, categoryDescription) that we need to capture in our forms.
//npm install formik

/* This is what we need for category POST...These are inputs we need in the form. 
    {
        "categoryName": "Test",
        "categoryDescription": "Test desc"
    }
*/

// Example Resource
//     {
//       resourceId: 1013,
//       name: "React Hooks",
//       description: "React Hooks Documentation",
//       url: "https://reactjs.org/docs/hooks-intro.html",
//       linkText: "React Hooks2",
//       categoryId: 5,
//       category: {
//         categoryId: 5,
//         categoryName: "ReactJS",
//         categoryDescription: "Information about ReactJS",
//         resources: [],
//       },
//     }

import * as Yup from 'Yup'

const categorySchema = Yup.object().shape({
    //Below we call to each property that will need to be validated and use Yup to define the requirements for each property (required, maxLength, etc.)
    categoryName: Yup.string().max(25, 'Max 25 characters').required('Required'),
    categoryDescription: Yup.string().max(50, 'Max 50 chatacters')
})

const resourceSchema = Yup.object().shape({
    name: Yup.string().max(25, 'Max 25 characters').required(),
    description: Yup.string().max(50, 'Max 50 characters'),
    url: Yup.string().max(75, 'Max 75 characters').required(),
    linkText: Yup.string().max(25, 'Max 25 characters').required(),
    categoryId: Yup.number().required()
})

export { categorySchema, resourceSchema }