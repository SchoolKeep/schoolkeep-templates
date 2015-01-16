# SchoolKeep Templates

Use this to edit the templates of the marketing pages for your school.

## Installation

### OSX

If you know how to use git, clone this repository.

If not install https://mac.github.com/ and clone this repository by clicking
[here](github-mac://openRepo/https://github.com/SchoolKeep/schoolkeep-templates) or using the `Clone in Desktop` on the right.
To open up the terminal in the `schoolkeep-templates` folder press Command+T or clicking the menu item `Repository -> Open in Terminal`.

In the terminal and in the `schoolkeep-templates` directory:

1. Install command line tools to compile ruby gems

    `xcode-select --install`

2. Install bundler to manage packages

    `sudo gem install bundler`

3. Install the gems required by `schoolkeep-templates`

    `bundle install`

## Usage

You can execute these commands in the `schoolkeep-templates` folder.

To run the local development server and preview from http://localhost:4000:
```sh
bundle exec sk server
```

To modify local development example data:
```sh
bundle exec sk fixtures
```
and modify `config/fixtures.yml`. No changes to the fixtures file will ever effect your school.

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
data from what you had entered into SchoolKeep.  See below for details on the
variables available within each template.

#### Course details
The course details page displays information about your course to prospective
students. All courses will use the same Course Details template, populated
with the data for the current course.

*Variables*

*States*

1. New student
2. Student has already purchased course but has not started
3. Student has already purchased course and has started

#### Course catalog

The course catalog page displays tiles with information about each course that
you have published in your school.

*Variables*

Uses an iterator for the course tiles

*States*

1. New student
2. Student has already purchased course but has not started
3. Student has already purchased course and has started

#### Custom page

The custom page template supports any pages made within the Pages section of
SchoolKeep. All custom pages will use the same Custom Page template, populated
with the data for the current custom page.

*Variables*

#### Homepage

*Variables*

### Partials

These partials can be used on the other pages.  Here's how you include a partial on a page `partial`

#### Header

The header encompasses the top navigation bar.  This includes the logged in / logged out state of the student, your logo, and navigation. 

*Variables*

*States*

1. Anonymous student
2. Logged in student

#### Footer

This partial encompasses the footer of your website.  You can insert any script tags here for tracking, chat systems, etc.

*Variables*

#### Course tile

*Variables*

*States*

1. New student
2. Student has already purchased course but has not started
3. Student has already purchased course and has started

### Editing CSS
We provide you with a single additive stylesheet to customize your school branding. This file is located at `sk-design/templates/styles.css.sktl` .  You can add or edit any styles within this stylesheet.  Additionally you have access to the color scheme variables that you've set within SchoolKeep.  `{{ color_scheme.background_color }}`.

### Fixtures & Variables
All your data will be pulled from information that you've entered into SchoolKeep, but this will allow you to test with sample data.  This sample data will not be uploaded to SchoolKeep and is only for testing purposes within the local development environment

`bundle exec sk fixture`
