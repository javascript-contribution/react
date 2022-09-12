
![Logo](https://miro.medium.com/max/1068/1*_gl-uGNLWOAFXqPAtoUk3g.png)


# react-template-components
## 🚀 About Us
We are contributors working to develop react boiler plate with all modern and best practise methods into react-template-components, 
which will have templates for all javascript users and contributors. Anyone who wants to refer the work or code for their future projects, can do that by just cloning or downloading zip files. This will be shared work with all contributors. Github could be used as a common platform for depositing individual’s valuable input on any framework or mostly into js dependencies libraries.


## Installation


```
  git clone https://github.com/javascript-contribution/react-template-components.git
  cd react-template-components
  npm install 
  npm start
```
    
## 🔗 Links
Deployed version at react templates components below:
[![portfolio](https://img.shields.io/badge/react_templates_components-00?style=for-the-badge&logo=react&logoColor=white)](https://react-js-template.netlify.app/) 
[![github](https://img.shields.io/badge/github-003?style=for-the-badge&logo=github&logoColor=white)](https://github.com/javascript-contribution/react-template-components)
[![twitter](https://img.shields.io/badge/Google_Slides-0A66C2?style=for-the-badge&logo=google&logoColor=white)](https://docs.google.com/presentation/d/1hKEyNF7R87IngnjgHUlTpyWlD7yY72DGevOthsA5Bm0/edit#slide=id.g1f87997393_0_782)



## Storybook & Documentation

[Storybook is a tool for UI development. 
It makes development faster and easier by isolating components. 
This allows you to work on one component at a time. 
You can develop entire UIs without needing to start up a complex dev stack, force certain data into your database, or navigate around your application. Develop your own UI and documentation on stories](https://storybook.js.org/)

```
npm run storybook
```



## Process to be followed:

1. Clone the public or private srijan depository
2. Give access to all individual contributors or keep it public
3. Use rebase technique on the feature branch for avoiding community code disputes
4. Individual contributor can’t do his own code review (Peer contributor could do that or their could be fixed chronological orders to assign code reviews)
5. Once code review is completed, merging and closing of feature branch must be done.
6. Each js library or dependencies must use its own name for the file which deposit work unto GitHub (eg. While using react-hook-form, peer contributor must name such as reactHookForm.js )
If anyone wants to create a customized code as in form of plugins, then could contribute here and later push work another repository to publish plugins as per motives.

7. Keep all new stack or library or dependencies as separate files as possible, to yield maximum code reusability .  
=> Contributing Guidelines for js are described in more detailed below, could be used:
https://github.com/TheAlgorithms/Javascript/blob/master/CONTRIBUTING.md
=> Here is the example for js contributions done by multiple collaborators with single motive : https://github.com/atom/atom



## Folder Structure
[![MIT License](https://img.shields.io/badge/src/Assets-Store_all_images_and_assets_here-pink.svg)](https://github.com/javascript-contribution/react-template-components/tree/main/src/Assets)

[![MIT License](https://img.shields.io/badge/src/Components-Store_all_components_and_their_fragment_components_here-blue.svg)](https://github.com/javascript-contribution/react-template-components/tree/main/src/Components)

[![MIT License](https://img.shields.io/badge/src/Components/Form/Custom/index.tsx-Keep_inside_"index"_file_for_custom_module-pink.svg)](https://github.com/javascript-contribution/react-template-components/tree/main/src/Components)

[![MIT License](https://img.shields.io/badge/src/Components/Form/Library/react_hook_form/index.tsx-Use_sub_folder_Library_for_any_module_from_npm-blue.svg)](https://github.com/javascript-contribution/react-template-components/tree/main/src/Components)

[![MIT License](https://img.shields.io/badge/src/Components/Form/Library/Fragments/hook_form_button/index.tsx-Use_sub_folder_"Fragments"_for_any_small_component_for_main_index.tsx-pink.svg)](https://github.com/javascript-contribution/react-template-components/tree/main/src/Components)

[![MIT License](https://img.shields.io/badge/src/Performance-Keep_Web_Vitals_heree-blue.svg)](https://github.com/javascript-contribution/react-template-components/tree/main/src/Components)

[![MIT License](https://img.shields.io/badge/src/Redux-Maintain_all_global_states_through_redux_here-pink.svg)](https://github.com/javascript-contribution/react-template-components/tree/main/src/Components)

[![MIT License](https://img.shields.io/badge/src/Storybooks-Maintain_all_stories_in_tsx_|_ts_|__mdx_|_jsx_|_js_as_per_choice-blue.svg)](https://github.com/javascript-contribution/react-template-components/tree/main/src/Components)

[![MIT License](https://img.shields.io/badge/src/Styles-Maintain_all_CSS_or_styles_here-pink.svg)](https://github.com/javascript-contribution/react-template-components/tree/main/src/Assets)

[![MIT License](https://img.shields.io/badge/src/Testing-Maintain_all_test_files_here-blue.svg)](https://github.com/javascript-contribution/react-template-components/tree/main/src/Components)

[![MIT License](https://img.shields.io/badge/src/Types-Use_folder_for_all_typescript_export-pink.svg)](https://github.com/javascript-contribution/react-template-components/tree/main/src/Components)

[![MIT License](https://img.shields.io/badge/src/Utils-Use_this_as_your_normal_utility-blue.svg)](https://github.com/javascript-contribution/react-template-components/tree/main/src/Components)

[![MIT License](https://img.shields.io/badge/src/Utils/Auth-Auth_Wrapper-pink.svg)](https://github.com/javascript-contribution/react-template-components/tree/main/src/Components)

[![MIT License](https://img.shields.io/badge/src/Utils/ErrorBoundary-ErrorBoundary_Wrapper-blue.svg)](https://github.com/javascript-contribution/react-template-components/tree/main/src/Components)

[![MIT License](https://img.shields.io/badge/src/Utils/Routes-Routes_and_its_description_here-pink.svg)](https://github.com/javascript-contribution/react-template-components/tree/main/src/Components)


[![MIT License](https://img.shields.io/badge/src/Utils/ServiceWorker-Write_config_for_offline_service_worker-blue.svg)](https://github.com/javascript-contribution/react-template-components/tree/main/src/Components)

## Branch Structure

* Never push changes to the master branch always check-out a branch and raise a PR.
* Create a feature branch from development branch(master or main in our case)
* Feature branch should only contain the work for only one feature
* It should not have multiple features in it
* Feature branch name should be in format (<REACT>-<feature-description>)e.g. REACT-signIn e.g. REACT-chat-feature
* Write code in feature branch only
* Before raising a PR, make sure you run local tests on your machine using npm run test or any other script to run your tests.
* Put reviewers on your PR. Squash and merge commits from the Github UI.
* While sending review, make sure your branch has latest code from development branch so that we don't get conflicts.
* update development branch from server, merge it to your feature branch and create PR
`git merge --no-ff master`
* Push only stable code in repo
* Bugs related to a feature should be fixed in that branch


## Commit Messages Format

    
- `Add=Create a capability e.g. feature, test, dependency.`
- `Cut=Remove a capability e.g. feature, test, dependency.`
- `Fix=Fix an issue e.g. bug, typo, accident, misstatement.`
- `Bump=Increase the version of something e.g. dependency.`
- `Make=Change the build process, or tooling, or infra.`
- `Start=Begin doing something; e.g. create a feature flag.`
- `Stop=End doing something; e.g. remove a feature flag.`
- `Refactor=A code change that MUST be just a refactoring.`
- `Reformat=Refactor of formatting, e.g. omit whitespace.`
- `Optimize=Refactor of performance, e.g. speed up code.`
- `Document=Refactor of documentation, e.g. help files.`
## Environment Variables

#### Firebase Google 

```
  To run this project, you will need to add the following environment variables to your .env file.
  Get those API SECRET KEYS from the following link:
  https://docs.google.com/presentation/d/1hKEyNF7R87IngnjgHUlTpyWlD7yY72DGevOthsA5Bm0/edit#slide=id.g1566e03837f_0_0
```



`REACT_APP_FIREBASE_API_KEY`  
`REACT_APP_FIREBASE_AUTH_DOMAIN`  
`REACT_APP_FIREBASE_PROJECT_ID`  
`REACT_APP_FIREBASE_STORAGE_BUCKET`  
`REACT_APP_FIREBASE_MESSAGING_SENDER_ID`  
`REACT_APP_FIREBASE_APP_ID`  
`REACT_APP_FIREBASE_MEASUREMENT_ID`  
`PUBLIC_URL`  

## Support

For support, join our Slack channel : 
- [js-community-contribution](https://join.slack.com/share/enQtNDA4MDA2MDg3MzE4NS0wYTc3YWNiMmQzNWQxNjk2NTMyZTgwMWRiNzVkNDUzMDlhYTYzYzA4MmJlZmMwZDAxODJmZTIxMzlkYjU4MmM2)



## Tech Stack

**Client:** React, Redux, TailwindCSS,  Storybook, Redux Toolkit, React Query - TanStack, React Hook Form, SASS, MUI, Firebase Google, Bootstrap, Emotion Styled, Redux Saga, Redux Logger, CircleCI

**Server:** Node, Express

**Database:** MongoDB NoSQL, Google Firebase

## Authors

- [@Clinto_Abraham](https://github.com/clinto92)
- [@Nishant_Srijan](https://github.com/nishant-srijan)
- [@Aman](https://github.com/aman4you)
- [@Riduvan](https://github.com/riduvan96)

## License
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)










## Reference

 - [Storybook](https://storybook.js.org/)
 - [Redux Toolkit](https://redux-toolkit.js.org/)
 - [React Query - TanStack](https://react-query-v3.tanstack.com/)
 - [React Hook Form](https://react-hook-form.com/)
 - [SASS](https://sass-lang.com/)
 - [MUI](https://mui.com/)
 - [Firebase Google](https://firebase.google.com/docs)
 - [Bootstrap](https://getbootstrap.com/)
 - [Emotion Styled](https://emotion.sh/docs/styled)
 - [Redux Saga](https://redux-saga.js.org/)
 - [Redux Logger](https://www.npmjs.com/package/redux-logger)
 - [CircleCI](https://circleci.com/docs)
 


## Build

To deploy this project efficiently and then push your code into any feature branch

```bash
  npm run build
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## 🛠 Skills
React.JS, Typescript, Javascript, HTML, CSS, Sass...


## Feedback

If you have any feedback, please reach out to us at clinto.abraham@srijan.net | surabhi.gokte@srijan.net

