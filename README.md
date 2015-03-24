# SchoolKeep Templates

Use this to edit the templates of the marketing pages for your school.

## Installation

### OSX

If you know how to use git, clone this repository.

If not install https://mac.github.com/ and clone this repository by clicking
[here](github-mac://openRepo/https://github.com/SchoolKeep/schoolkeep-templates) or using the `Clone in Desktop` on the right.
To open up the terminal in the `schoolkeep-templates` folder press Command+T or clicking the menu item `Repository -> Open in Terminal`.

In the terminal and in the `schoolkeep-templates` directory:

1. Install bundler to manage packages

    `sudo gem install bundler`

2. Install the gems required by `schoolkeep-templates`

    `bundle install`

## Edit Templates

All templates are in the templates folder. You can edit the files using any text editor.
If you don't know how to edit the files you can download the Atom editor https://atom.io/
then inside the github app you can press Command+Shift+A or clicking the menu item `Repository -> Open in Atom`

## Usage

You can execute these commands in the `schoolkeep-templates` folder.

To run the local development server:
```sh
bundle exec sk server
```
You can access your local server and view all changes you make to the templates
by opening and browser and going to http://localhost:4000.

You can download your school settings by executing this command:
```sh
SK_API_KEY=your-api-key bundle exec sk download-fixtures
```
If you want to learn about changing the example data read the `FIXTURES.md` file.

To upload all templates and deploy local template changes to our server:
```sh
SK_API_KEY=your-api-key bundle exec sk upload --all
```

To reset all all changes and use SchoolKeep's default templates:
```sh
SK_API_KEY=your-api-key bundle exec sk reset --all
```

###Disclaimer
Once you've edited your templates, we will not be able to support the look and
feel of your website.  If you need to reset, we've provided the commands to do
so. Additionally, we won't support automatic updates with additional features
that SchoolKeep makes to the base templates.  You will need to merge the
changes into your templates directory.


### Templates overview

This section will provide you with information on the editable templates and 
the variables available to you in each template.  All your data will be pulled
from data that you have entered into SchoolKeep, but this will allow you to
test with sample data.

You can edit the existing templates, but there is no way to add additional
templates.  Currently there is 1 template for each page
(ie: 1 homepage template, 1 course details page template, 1 custom page template).

### Scribble

We use Scribble as our templating language.  See more here: https://github.com/SchoolKeep/scribble

Scribble provides variables so that your data can be pulled from what you've
entered into SchoolKeep.  `{{ variable_name }}` will pull the corresponding
data from what you had entered into SchoolKeep.
