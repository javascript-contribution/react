# react-template-components

react-template-components will have templates for all javascript users and contributors. Anyone who wants to refer the work or code for their future projects, can do that by just cloning or downloading zip files. This will be shared work with all contributors. Github could be used as a common platform for depositing individual’s valuable input on any framework or mostly into js dependencies libraries.

## Click Deployed Version here => https://react-js-template.netlify.app/
# Process to be followed:

Clone the public or private srijan depository
Give access to all individual contributors or keep it public
Use rebase technique on the feature branch for avoiding community code disputes
Individual contributor can’t do his own code review (Peer contributor could do that or their could be fixed chronological orders to assign code reviews)
Once code review is completed, merging and closing of feature branch must be done.
Each js library or dependencies must use its own name for the file which deposit work unto GitHub (eg. While using react-hook-form, peer contributor must name such as reactHookForm.js )
Test file/ code template could also be written for each push or could contribute to the peer contributor’s work
Also documentation of intallation of npm or yarn for each individual dependencies could be shown on the readMe file
Also show links of other documentation and sandbox of each work on the readme file, if possible
Use comments for each javascript file, if seemed important.
If anyone wants to create a customized code as in form of plugins, then could contribute here and later push work another repository to publish plugins as per motives.
Keep all new stack or library or dependencies as separate files as possible, to yield maximum code reusability .  
=> Contributing Guidelines for js are described in more detailed below, could be used:
https://github.com/TheAlgorithms/Javascript/blob/master/CONTRIBUTING.md
=> Here is the example for js contributions done by multiple collaborators with single motive : https://github.com/atom/atom
=> To proceed ahead, someone from HR or js contributor must make an new GitHub repository which is free unless using full fledge features or tools such as Continous integration, etc..

# Folder Structure
src/Assets                                                              => Store all images and assets here
src/Components                                                          => Store all components and their fragment components here
eg. src/Components/Form/Custom/index.tsx                                => Keep inside "index" file for custom module
    src/Components/Form/Library/react-hook-form.tsx                     => Use sub folder "Library" for any module from npm
    src/Components/Form/Library/Fragments/hook-form-button.tsx          => Use sub folder "Fragments" for any small component for main index.tsx
src/Performance                                                         => Keep Web Vitals here
src/Styles                                                              => Maintain all CSS or styles here
src/Testing                                                             => Maintain all test files here
src/Types                                                               => Use folder for all typescript export
src/Utils                                                               => Use this as your normal utility; also use this for routing
# Branch Structure

Never push changes to the master branch always check-out a branch and raise a PR.

Create a feature branch from development branch(master or main in our case)

Feature branch should only contain the work for only one feature
It should not have multiple features in it
Feature branch name should be in format (<REACT>-<feature-description>)
e.g. REACT-signIn
e.g. REACT-chat-feature
Write code in feature branch only

Before raising a PR, make sure you run local tests on your machine using npm run test or any other script to run your tests.

Put reviewers on your PR. Squash and merge commits from the Github UI.

While sending review, make sure your branch has latest code from development branch so that we don't get conflicts.

update development branch from server, merge it to your feature branch and create PR
git merge --no-ff master
Push only stable code in repo

Bugs related to a feature should be fixed in that branch

Commit Messages Format:

Add = Create a capability e.g. feature, test, dependency.

Cut = Remove a capability e.g. feature, test, dependency.

Fix = Fix an issue e.g. bug, typo, accident, misstatement.

Bump = Increase the version of something e.g. dependency.

Make = Change the build process, or tooling, or infra.

Start = Begin doing something; e.g. create a feature flag.

Stop = End doing something; e.g. remove a feature flag.

Refactor = A code change that MUST be just a refactoring.

Reformat = Refactor of formatting, e.g. omit whitespace.

Optimize = Refactor of performance, e.g. speed up code.

Document = Refactor of documentation, e.g. help files.
