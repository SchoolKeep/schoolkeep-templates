# Fixtures & Variables
To change the local development example data you can open another terminal and execute:
```sh
bundle exec sk generate-fixtures
```
and modify `config/fixtures.yml`. No changes to the fixtures file will ever effect your school.

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
