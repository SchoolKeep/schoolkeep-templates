<h1 align="center">
  <br>
  <a href="https://www.northpass.com/">
    <img width="256" src="https://raw.githubusercontent.com/SchoolKeep/schoolkeep-templates/readme-improvements/img/northpass_emblem.svg" alt="Northpass Logo">
  </a>
  <br>
  Northpass Templates
  <br>
</h1>
<br>

<div align="center">
  <img src="https://forthebadge.com/images/badges/built-with-love.svg" alt="Build with Love">
  <img src="https://forthebadge.com/images/badges/for-you.svg" alt="For You">
</div>

<h4 align="center">Use this to customize the User Experience for your school</h4>
<br>

## Table of Contents
- [How Northpass templates works](#how-northpass-templates-works)
  - [General information](#general-information)
  - [Liquid](#liquid)
  - [Root and partial templates](#root-and-partial-templates)
  - [Important](#warning-important-warning)
- [Quick start](#quick-start)
- [Templates](#templates)
  - [/my_dashboard](https://github.com/SchoolKeep/schoolkeep-templates/tree/readme-improvements#my-dashboard)
  - [/learning_paths](https://github.com/SchoolKeep/schoolkeep-templates/tree/readme-improvements#learning-paths)
  - [/learning_paths/:id/cover](https://github.com/SchoolKeep/schoolkeep-templates/tree/readme-improvements#learning-paths-id-cover)
  - [/courses/:id/cover](https://github.com/SchoolKeep/schoolkeep-templates/tree/readme-improvements#course-id-cover)
  - [/learning_paths/:lp_id/courses/:c_id/cover](https://github.com/SchoolKeep/schoolkeep-templates/tree/readme-improvements#learning_paths-lpid-courses-cid-cover)
  - [Learning Experience V3](https://github.com/SchoolKeep/schoolkeep-templates/tree/readme-improvements#learning-experience-v3)
  - [Learning Experience V2](https://github.com/SchoolKeep/schoolkeep-templates/tree/readme-improvements#learning-experience-v2)
  - [/account/edit](https://github.com/SchoolKeep/schoolkeep-templates/tree/readme-improvements#account-edit)
  - [/training_events](https://github.com/SchoolKeep/schoolkeep-templates/tree/readme-improvements#training-events)
  - [/training_sessions/:id](https://github.com/SchoolKeep/schoolkeep-templates/tree/readme-improvements#training-session-id)
  - [/search](https://github.com/SchoolKeep/schoolkeep-templates/tree/readme-improvements#search)
  - [/catalog](https://github.com/SchoolKeep/schoolkeep-templates/tree/readme-improvements#catalog)
  - [/catalog_search](https://github.com/SchoolKeep/schoolkeep-templates/tree/readme-improvements#catalog-search)
  - [/catalog/:id/:slug](https://github.com/SchoolKeep/schoolkeep-templates/tree/readme-improvements#catalog-id-slug)
  - [/learning_paths/:id](https://github.com/SchoolKeep/schoolkeep-templates/tree/readme-improvements#learning-paths-id)
  - [/](https://github.com/SchoolKeep/schoolkeep-templates/tree/readme-improvements#homepage-path)
  - [/404](https://github.com/SchoolKeep/schoolkeep-templates/tree/readme-improvements#not-found)
  - [/500](https://github.com/SchoolKeep/schoolkeep-templates/tree/readme-improvements#server-error)


## How Northpass templates works
### General information 
In this repository we give you access to base templates, which should be the starting point for your customizations. All templates are in the `/templates` directory. You can edit them, but you can't add your own.

[:arrow_up:](#table-of-contents)

### Liquid
At Northpass, we use Liquid as a template language. [Liquid](https://shopify.github.io/liquid/) was created by Shopify and is used in production by dozens of companies around the world. We use it to load dynamic content on the school website. In individual templates you can use variables that download data directly from the Northpass platform. Thanks to this, you have the opportunity to create a completely unique User Experience in your school.

We encourage you to read the [Liquid documentation](https://shopify.github.io/liquid/) to learn more about the syntax and possible use cases.

[:arrow_up:](#table-of-contents)

### Root and partial templates
The templates available in our application are divided into two types: 
* **root templates**
* **partial templates**

**Root template** occurs only once for pages in the application for which we enable customizations, e.g. `my_content`, `course_index` or `course_details`.

**Partial templates** are smaller fragments that can be included in root templates, their name always begins with the prefix `_`.

Thanks to this division, we are able for instance to customize a footer once and use it in all other templates.

This is the example of the root template and its partial templates:
```
course_index
    ├── _head
    ├── _header
    ├── _footer
    ├── _catalog_search_form
    ├── _course
```

[:arrow_up:](#table-of-contents)

### :warning: Important :warning:
Once you’ve edited your templates we won’t support automatic updates with additional features that Northpass makes to the base templates. You will need to merge the changes into your templates directory. Additionally, we will not be able to support the look and feel of your website.

[:arrow_up:](#table-of-contents)


## Quick start
**1. Clone the repository**

```
git clone https://github.com/SchoolKeep/schoolkeep-templates.git
```  

**2. Install text editor**

If you don't have any text editor installed, you should now choose one. Below is a list of a few that are very popular and you can certainly trust them.

VSCode             |  Atom          |  Sublime  
:-------------------------:|:-------------------------:|:-------------------------:  
<a href="https://code.visualstudio.com/">![](img/vscode.png)</a>  |  <a href="https://atom.io/">![](img/atom.png)</a> |  <a href="https://www.sublimetext.com/">![](img/sublime.png)</a>  

**3. Modify base templates**

Open the directory with the cloned repository in the text editor of your choice and you can get started! 🚀🚀🚀

**4. Upload modified templates to the Northpass application**

After you make changes to selected base templates, you should upload them to the application. Go to the `Design` tab in the administrator view and then to `School Website Styling`.

Click the `Upload Templates` button and add the templates you have chosen, then confirm the changes with the `Save` button.

![](img/school_website_styling.png)

[:arrow_up:](#table-of-contents)

## Templates

<table align="center" border="0">  
	<tr>
		<td align="center" colspan="2">
		<a name="my-dashboard">
		<b>Screenshoot</b>
		</a>
		</td>
	</tr>
    <tr>  
        <td colspan="2">
        <img src="https://raw.githubusercontent.com/SchoolKeep/schoolkeep-templates/readme-improvements/img/placeholder.png">
        </td>  
    </tr>  
    <tr>  
        <td align="center"><b>Path</b></td>  
        <td align="center"><b>Available Templates</b></td>  
    </tr>  
    <tr>  
        <td align="center"><b><code>/my_dashboard</code></b></td>  
        <td>
            <ul>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/my_content.html.liquid">my_content</a></li>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_course.html.liquid">_course</a></li>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_filters.html.liquid">_filters</a></li>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_footer.html.liquid">_footer</a></li>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_head.html.liquid">_head</a></li>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_header.html.liquid">_header</a></li>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_learning_path.html.liquid">_learning_path</a></li>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_learning_path_filters.html.liquid">_learning_path_filters</a></li>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_my_content_header.html.liquid">_my_content_header</a></li>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_my_paths.html.liquid">_my_paths</a></li>  
            </ul>  
        </td>  
    </tr>  
</table>

[:arrow_up:](#table-of-contents)

<table align="center" border="0">  
	<tr>
		<td align="center" colspan="2">
		<a name="learning-paths">
		<b>Screenshoot</b>
		</a>
		</td>
	</tr>
    <tr>  
        <td colspan="2">
        <img src="https://raw.githubusercontent.com/SchoolKeep/schoolkeep-templates/readme-improvements/img/placeholder.png">
        </td>  
    </tr>  
    <tr>  
        <td align="center"><b>Path</b></td>  
        <td align="center"><b>Available Templates</b></td>  
    </tr>  
    <tr>  
        <td align="center"><b><code>/learning_paths</code></b></td>  
        <td>
            <ul>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/my_content.html.liquid">learning_paths_index</a></li>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_footer.html.liquid">_footer</a></li>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_head.html.liquid">_head</a></li>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_header.html.liquid">_header</a></li>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_learning_path.html.liquid">_learning_path</a></li>
            </ul>  
        </td>  
    </tr>  
</table>

[:arrow_up:](#table-of-contents)

<table align="center" border="0">  
	<tr>
		<td align="center" colspan="2">
		<a name="learning-paths-id-cover">
		<b>Screenshoot</b>
		</a>
		</td>
	</tr>
    <tr>  
        <td colspan="2">
        <img src="https://raw.githubusercontent.com/SchoolKeep/schoolkeep-templates/readme-improvements/img/placeholder.png">
        </td>  
    </tr>  
    <tr>  
        <td align="center"><b>Path</b></td>  
        <td align="center"><b>Available Templates</b></td>  
    </tr>  
    <tr>  
        <td align="center"><b><code>/learning_paths/:id/cover</code></b></td>  
        <td>
            <ul>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/custom_javascript_v3.html.liquid">custom_javascript_v3</a></li>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/learning_path_cover.html.liquid">learning_path_cover</a></li>
            </ul>  
        </td>  
    </tr>  
</table>

[:arrow_up:](#table-of-contents)

<table align="center" border="0">  
	<tr>
		<td align="center" colspan="2">
		<a name="course-id-cover">
		<b>Screenshoot</b>
		</a>
		<a name="learning_paths-lpid-courses-cid-cover">
		</a>
		</td>
	</tr>
    <tr>  
        <td colspan="2">
        <img src="https://raw.githubusercontent.com/SchoolKeep/schoolkeep-templates/readme-improvements/img/placeholder.png"> 
        </td>  
    </tr>  
    <tr>  
        <td align="center"><b>Path</b></td>  
        <td align="center"><b>Available Templates</b></td>  
    </tr>  
    <tr>  
        <td align="center">
        <b><code>/courses/:id/cover</code></b>
        <br>
        <b><code>/learning_paths/:lp_id/courses/:c_id/cover</code></b>
        </td>  
        <td>
            <ul>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/course_cover.html.liquid">course_cover</a></li>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/custom_javascript_v3.html.liquid">custom_javascript_v3</a> (when on Learning Experience V3)</li>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/custom_javascript_v2.html.liquid">custom_javascript_v2</a> (when on Learning Experience V2)</li>
            </ul>  
        </td>  
    </tr>  
</table>

[:arrow_up:](#table-of-contents)

<table align="center" border="0">  
	<tr>
		<td align="center" colspan="2">
		<a name="learning-experience-v3">
		<b>Screenshoot</b>
		</a>
		</td>
	</tr>
    <tr>  
        <td colspan="2">
        <img src="https://raw.githubusercontent.com/SchoolKeep/schoolkeep-templates/readme-improvements/img/placeholder.png"> 
        </td>  
    </tr>  
    <tr>  
        <td align="center"><b>Path</b></td>  
        <td align="center"><b>Available Templates</b></td>  
    </tr>  
    <tr>  
        <td align="center"><b><code>Learning Experience V3</code></b></td>  
        <td>
            <ul>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/custom_javascript_v3.html.liquid">custom_javascript_v3</a></li>  
            </ul>  
        </td>  
    </tr>  
</table>

[:arrow_up:](#table-of-contents)

<table align="center" border="0">  
	<tr>
		<td align="center" colspan="2">
		<a name="learning-experience-v2">
		<b>Screenshoot</b>
		</a>
		</td>
	</tr>
    <tr>  
        <td colspan="2">
        <img src="https://raw.githubusercontent.com/SchoolKeep/schoolkeep-templates/readme-improvements/img/placeholder.png"> 
        </td>  
    </tr>  
    <tr>  
        <td align="center"><b>Path</b></td>  
        <td align="center"><b>Available Templates</b></td>  
    </tr>  
    <tr>  
        <td align="center"><b><code>Learning Experience V2</code></b></td>  
        <td>
            <ul>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/custom_javascript_v2.html.liquid">custom_javascript_v2</a></li>  
            </ul>  
        </td>  
    </tr>  
</table>

[:arrow_up:](#table-of-contents)

<table align="center" border="0">  
	<tr>
		<td align="center" colspan="2">
		<a name="account-edit">
		<b>Screenshoot</b>
		</a>
		</td>
	</tr>
    <tr>  
        <td colspan="2"> 
            <img src="https://raw.githubusercontent.com/SchoolKeep/schoolkeep-templates/readme-improvements/img/account_edit.png">  
        </td>  
    </tr>  
    <tr>  
        <td align="center"><b>Path</b></td>  
        <td align="center"><b>Available Templates</b></td>  
    </tr>  
    <tr>  
        <td align="center"><b><code>/account/edit</code></b></td>  
        <td>
            <ul>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_footer.html.liquid">_footer</a></li>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_head.html.liquid">_head</a></li>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_header.html.liquid">_header</a></li>  
            </ul>  
        </td>  
    </tr>  
</table>

[:arrow_up:](#table-of-contents)

<table align="center" border="0">  
	<tr>
		<td align="center" colspan="2">
		<a name="training-events">
		<b>Screenshoot</b>
		</a>
		</td>
	</tr>
    <tr>  
        <td colspan="2">
        <img src="https://raw.githubusercontent.com/SchoolKeep/schoolkeep-templates/readme-improvements/img/placeholder.png"> 
        </td>  
    </tr>  
    <tr>  
        <td align="center"><b>Path</b></td>  
        <td align="center"><b>Available Templates</b></td>  
    </tr>  
    <tr>  
        <td align="center">
        <b><code>/training_events</code></b>
        <br>
        (available when Instructor-Led Training is active)
        </td>  
        <td>
            <ul>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/discover_events.html.liquid">discover_events</a></li>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_footer.html.liquid">_footer</a></li>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_head.html.liquid">_head</a></li>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_header.html.liquid">_header</a></li>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_training_session.html.liquid">_training_session</a></li>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_training_event.html.liquid">_training_event</a></li>
            </ul>  
        </td>  
    </tr>  
</table>

[:arrow_up:](#table-of-contents)

<table align="center" border="0">  
	<tr>
		<td align="center" colspan="2">
		<a name="training-session-id">
		<b>Screenshoot</b>
		</a>
		</td>
	</tr>
    <tr>  
        <td colspan="2">
        <img src="https://raw.githubusercontent.com/SchoolKeep/schoolkeep-templates/readme-improvements/img/placeholder.png"> 
        </td>  
    </tr>  
    <tr>  
        <td align="center"><b>Path</b></td>  
        <td align="center"><b>Available Templates</b></td>  
    </tr>  
    <tr>  
        <td align="center">
        <b><code>/training_sessions/:id</code></b>
        <br>
        (available when Instructor-Led Training is active)
        </td>  
        <td>
            <ul>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/training_session_show.html.liquid">training_session_show</a></li>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_footer.html.liquid">_footer</a></li>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_head.html.liquid">_head</a></li>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_header.html.liquid">_header</a></li>
            </ul>  
        </td>  
    </tr>  
</table>

[:arrow_up:](#table-of-contents)

<table align="center" border="0">  
	<tr>
		<td align="center" colspan="2">
		<a name="search">
		<b>Screenshoot</b>
		</a>
		</td>
	</tr>
    <tr>  
        <td colspan="2">
        <img src="https://raw.githubusercontent.com/SchoolKeep/schoolkeep-templates/readme-improvements/img/placeholder.png"> 
        </td>  
    </tr>  
    <tr>  
        <td align="center"><b>Path</b></td>  
        <td align="center"><b>Available Templates</b></td>  
    </tr>  
    <tr>  
        <td align="center">
        <b><code>/search</code></b>
        <br>
        (available when Search + Discovery is active)
        </td>  
        <td>
            <ul>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_filters.html.liquid">_filters</a></li>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_footer.html.liquid">_footer</a></li>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_head.html.liquid">_head</a></li>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_header.html.liquid">_header</a></li>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_search_form.html.liquid">_search_form</a></li>
            </ul>  
        </td>  
    </tr>  
</table>

[:arrow_up:](#table-of-contents)

<table align="center" border="0">  
	<tr>
		<td align="center" colspan="2">
		<a name="catalog">
		<b>Screenshoot</b>
		</a>
		</td>
	</tr>
    <tr>  
        <td colspan="2">
        <img src="https://raw.githubusercontent.com/SchoolKeep/schoolkeep-templates/readme-improvements/img/placeholder.png"> 
        </td>  
    </tr>  
    <tr>  
        <td align="center"><b>Path</b></td>  
        <td align="center"><b>Available Templates</b></td>  
    </tr>  
    <tr>  
        <td align="center">
        <b><code>/catalog</code></b>
        <br>
        (available when Website and Catalog is active)
        </td>  
        <td>
            <ul>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/course_index.html.liquid">course_index</a></li>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_footer.html.liquid">_footer</a></li>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_head.html.liquid">_head</a></li>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_header.html.liquid">_header</a></li>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_catalog_search_form.html.liquid">_catalog_search_form</a></li>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_course.html.liquid">_course</a></li>
            </ul>  
        </td>  
    </tr>  
</table>

[:arrow_up:](#table-of-contents)

<table align="center" border="0">  
	<tr>
		<td align="center" colspan="2">
		<a name="catalog-search">
		<b>Screenshoot</b>
		</a>
		</td>
	</tr>
    <tr>  
        <td colspan="2">
        <img src="https://raw.githubusercontent.com/SchoolKeep/schoolkeep-templates/readme-improvements/img/placeholder.png"> 
        </td>  
    </tr>  
    <tr>  
        <td align="center"><b>Path</b></td>  
        <td align="center"><b>Available Templates</b></td>  
    </tr>  
    <tr>  
        <td align="center">
        <b><code>/catalog_search</code></b>
        <br>
        (available when Search + Discovery is active)
        </td>  
        <td>
            <ul>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_footer.html.liquid">_footer</a></li>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_head.html.liquid">_head</a></li>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_header.html.liquid">_header</a></li>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_catalog_search_form.html.liquid">_catalog_search_form</a></li>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_catalog_filters.html.liquid">_catalog_filters</a></li>
            </ul>  
        </td>  
    </tr>  
</table>

[:arrow_up:](#table-of-contents)

<table align="center" border="0">  
	<tr>
		<td align="center" colspan="2">
		<a name="catalog-id-slug">
		<b>Screenshoot</b>
		</a>
		</td>
	</tr>
    <tr>  
        <td colspan="2">
        <img src="https://raw.githubusercontent.com/SchoolKeep/schoolkeep-templates/readme-improvements/img/placeholder.png"> 
        </td>  
    </tr>  
    <tr>  
        <td align="center"><b>Path</b></td>  
        <td align="center"><b>Available Templates</b></td>  
    </tr>  
    <tr>  
        <td align="center">
        <b><code>/catalog/:id/:slug</code></b>
        <br>
        (available when Website and Catalog is active)
        </td>  
        <td>
            <ul>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/course_details.html.liquid">course_details</a></li>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_footer.html.liquid">_footer</a></li>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_head.html.liquid">_head</a></li>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_header.html.liquid">_header</a></li>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_catalog_search_form.html.liquid">_catalog_search_form</a></li>
            </ul>  
        </td>  
    </tr>  
</table>

[:arrow_up:](#table-of-contents)

<table align="center" border="0">  
	<tr>
		<td align="center" colspan="2">
		<a name="learning-paths-id">
		<b>Screenshoot</b>
		</a>
		</td>
	</tr>
    <tr>  
        <td colspan="2">
        <img src="https://raw.githubusercontent.com/SchoolKeep/schoolkeep-templates/readme-improvements/img/placeholder.png"> 
        </td>  
    </tr>  
    <tr>  
        <td align="center"><b>Path</b></td>  
        <td align="center"><b>Available Templates</b></td>  
    </tr>  
    <tr>  
        <td align="center">
        <b><code>/learning_paths/:id</code></b>
        <br>
        (available when Search + Discovery is active)
        </td>  
        <td>
            <ul>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/learning_path_details.html.liquid">learning_path_details</a></li>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_footer.html.liquid">_footer</a></li>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_head.html.liquid">_head</a></li>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_header.html.liquid">_header</a></li>
            </ul>  
        </td>  
    </tr>  
</table>

[:arrow_up:](#table-of-contents)

<table align="center" border="0">  
	<tr>
		<td align="center" colspan="2">
		<a name="homepage-path">
		<b>Screenshoot</b>
		</a>
		</td>
	</tr>
    <tr>  
        <td colspan="2">
        <img src="https://raw.githubusercontent.com/SchoolKeep/schoolkeep-templates/readme-improvements/img/placeholder.png"> 
        </td>  
    </tr>  
    <tr>  
        <td align="center"><b>Path</b></td>  
        <td align="center"><b>Available Templates</b></td>  
    </tr>  
    <tr>  
        <td align="center">
        <b><code>/</code></b>
        <br>
        (available when Website and Catalog is active)
        </td>  
        <td>
            <ul>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/homepage.html.liquid">homepage</a></li>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_footer.html.liquid">_footer</a></li>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_head.html.liquid">_head</a></li>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_header.html.liquid">_header</a></li>
            </ul>  
        </td>  
    </tr>  
</table>

[:arrow_up:](#table-of-contents)

<table align="center" border="0">  
	<tr>
		<td align="center" colspan="2">
		<a name="not-found">
		<b>Screenshoot</b>
		</a>
		</td>
	</tr>
    <tr>  
        <td colspan="2">
        <img src="https://raw.githubusercontent.com/SchoolKeep/schoolkeep-templates/readme-improvements/img/placeholder.png"> 
        </td>  
    </tr>  
    <tr>  
        <td align="center"><b>Path</b></td>  
        <td align="center"><b>Available Templates</b></td>  
    </tr>  
    <tr>  
        <td align="center">
        <b><code>/404</code></b>
        </td>  
        <td>
            <ul>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/not_found.html.liquid">not_found</a></li>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_footer.html.liquid">_footer</a></li>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_head.html.liquid">_head</a></li>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_header.html.liquid">_header</a></li>
            </ul>  
        </td>  
    </tr>  
</table>

[:arrow_up:](#table-of-contents)

<table align="center" border="0">  
	<tr>
		<td align="center" colspan="2">
		<a name="server-error">
		<b>Screenshoot</b>
		</a>
		</td>
	</tr>
    <tr>  
        <td colspan="2">
        <img src="https://raw.githubusercontent.com/SchoolKeep/schoolkeep-templates/readme-improvements/img/placeholder.png"> 
        </td>  
    </tr>  
    <tr>  
        <td align="center"><b>Path</b></td>  
        <td align="center"><b>Available Templates</b></td>  
    </tr>  
    <tr>  
        <td align="center">
        <b><code>/500</code></b>
        </td>  
        <td>
            <ul>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/server_error.html.liquid">server_error</a></li>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_footer.html.liquid">_footer</a></li>  
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_head.html.liquid">_head</a></li>
                <li><a href="https://github.com/SchoolKeep/schoolkeep-templates/blob/readme-improvements/templates/_header.html.liquid">_header</a></li>
            </ul>  
        </td>  
    </tr>  
</table>

[:arrow_up:](#table-of-contents)

# Variables that are available in certain templates. 

Templates starting without `_` are *main* or *root* templates.

(click variables to see variable definitions and methods)
## my_content

- [my_content](#my_content-1)

## learning_paths_index

- [learning_paths](#learning_paths-1)

## learning_path_cover, learning_path_details

- [learning_path](#learning_paths-1)

## course_index

- [courses](#courses)

## course_cover, course_details

- [course](#course)

## homepage

- [homepage](#homepage-1)

## _footer

- [footer_navigations](#footer_navigations)
- [website_footer](#website_footer)

## _header

- [header_navigations](#header_navigations)

## _search_form, _catalog_search_form

- [search_result](#search_result)
- [header_navigations](#header_navigations)

## training_session_show

- [training_session](#training_session)

## discover_events

- [training_events](#training_events)
- [filter_options] - list of values and labels to populate filter component
- filter - renders filter dropdown component

## _training_session

- [session](#session)

## _training_event

- [training_event](#training_event-1)

---

# Variables definitions & methods

## Array

methods:

- each
- any?
- empty?
- size

## color_palette

methods:

- learning_header_font_color
- header_font_color
- header_font_hover_color
- learning_header_color
- learning_header_font_hover_color
- button_hover_color
- learning_link_button_color
- learning_progress_bar_color
- header_color
- color_palette
- button_color
- button_font_color

## current_person

methods:

- sso_uid
- email
- first_name
- enrolled_in_course?

        // WARNING: It takes course from current context
        {% for course in my_content.courses %}
           {% if current_person.enrolled_in_course? %} // course variable is implicitly used here
           {% endif %}
        {% endfor %}

- enrolled_in_learning_path?

    // WARNING: It takes learning path from current context
    {% for learning_path in my_content.learning_paths %}
       {% if current_person.enrolled_in_learning_path? %} // learning_path variable is implicitly used here
       {% endif %}
    {% endfor %}

- filterable_categories
- filterable_catalog_categories
- filterable_learning_path_categories
- id
- upcoming_registered_events
- my_content_label
- name
- signed_in?

## current_school

methods:

- logo_navigation_url
- search_enabled?
- disable_social_share?
- filtering_enabled?
- has_custom_styles?
- learning_paths_enabled?
- logo_url
- show_powered_by_school_keep?
- sso_enabled?
- uuid
- filterable_categoriess
- apps
- name
- my_content_label
- public

## custom_templates

methods:

- each
- any?

## custom_template

(available when using `each` method on **[custom_templates]

methods:

- name
- fingerprint

## my_content

methods:

- learning_paths
- subheadline
- headline
- courses
- learning_paths_headline
- learning_paths_subheadline
- empty_learning_paths
- learning_paths?

## routes

methods:

- log_out_path
- my_content_path
- my_profile_path
- school_website_catalog_path
- school_website_catalog_search_path
- school_website_search_path
- schoolkeep_v3_styles_url
- sign_up_path
- log_in_path
- url_helpers
- color_scheme_path
- custom_styles_path

## courses

- each
- any?

## course

(available also when using `each` method)

methods:

- progress_text
- instructors
- published_sections
- course_category_names
- about_label
- buy_label
- course_attempts_path
- cover_path
- details_path
- discover_events_path
- enrollment_url
- featured_image_url
- formatted_price
- forum_path
- full_description
- go_to_label
- has_forum?
- has_outline
- instructor_names
- instructors_title
- learner_can_retake?
- list_image_url
- name
- new_order_path
- outline_label
- outline_path
- payment_required?
- progress
- progress_bar
- progress_title
- promo_video_embed
- register_for_events
- retake_course
- ribbon
- short_description
- show_events?
- social_links
- start_or_continue
- superscirpt
- view_label

## footer_navigations

methods:

- each
- any?

## header_navigations

methods:

- each
- any?

## website_navigation

(available when using `each` method
methods:

- external?
- name
- path

## website_footer

methods:

- social_media_links
- school_customer_service_email
- show_customer_service_email?
- show_navigation_links?
- show_social_media_links?

## learning_paths

methods:

- each
- any?

## learning_path

(available also when using `each` method)

methods:

- about_label
- cover_path
- description
- details_path
- enrollment_url
- featured_image_url
- first_uncompleted_cover_path
- go_to_label
- has_instructors?
- has_progress?
- instructor_names
- instructors
- instructors_title
- learning_path_category_names
- list_image_url
- name
- outline_label
- progress_bar
- progress_text
- view_label
- items
- current_person_learning_path_item

## instructor

(available when using `each` method)

methods:

- bio
- image_url
- name
- title

## person_learning_path_item

(available when using `each` method)

methods:

- completed?
- cover_path
- locked?
- name
- optional?
- progress_icon
- traning_event
- type_icon

## section

(available when using `each` method)

methods:

- name
- published_at
- will_be_published?
- activities

## activity

(available when using `each` method

methods:

- completed?
- list_class
- locked?
- milestone?
- path
- title

## search_result

methods:

- count

## homepage

methods:

- subheadline
- published_featured_courses
- artwork_url
- featured_courses_headline
- featured_courses_subheadline
- headline

## training_events

The list of training events. The object is type of Array and [these methods] can be used with it.

Each of them has access to methods from [training_event]

## training_event

methods:

- id - unique identifier of training event
- title
- type - one of: In person, Online
- sessions - list of training sessions. Each of them has access to methods from [training_session]

## training_session

methods:

- instructor_image_url
- description
- instructor_name
- register_url
- registration_actions
- instructor_title
- self_url
- session_day
- session_month
- instructor_assigned?
- session_time
- session_name
- starts_at
- session_url
- ohter_sessions_count
- unregister_url
- title
- location
- training_session
- other_sessions
- event_type_title

# FAQ

1. What pages don't have templates?

Any page not listed in **[Pages] ** part

2. What objects are available (example: `_course.html.liquid`) on each page? What do they do?

We have a list of variables available to every page **[here].** Additionally **[in the same section] ** we have templates that have more variables you can access. Please note that most of the templates starting with `_` are called **partials** (they are used inside other template) and have exactly the same variables as their "root" template

3. How can we upload templates programmatically?

There is an api endpoint:

    POST api.northpass.com/v1/custom_templates
    data: {
            custom_template: {
              name: name,
              body: body,
              engine: "liquid"
            }
          }

Additionally we've created a Visual Studio Code plugin that uses it [https://github.com/SchoolKeep/np-templates-vscode](https://github.com/SchoolKeep/np-templates-vscode). It's still private: needs README, would be nice to implement confirmation of account name before sending, maybe some kind of backup option?

4. What is the "homepage" template?

`[homepage` template] is used on the `/` (no path, plain domain) url when Website & Catalog app is active.

5. How do I get all learner courses?

Probably the only way now is to use **[my_content] .courses** in the [my_content]template.

6. Can I retrieve a specific course?

Only way would be to iterate over **[courses]** and then using some logic to use only specific course

    {% for course in my_content.courses %}
       {% if course.name == "Course 1" %}
         // do something with specific course
    	 {% endif %}
    {% endfor %}
    

7. What are all the custom_javascript files?

**custom_javascript_v[LX version]** is used dependent on the current account LX version. Other custom_javascript files are remains of old code and are unused

8. Is there a universal template we can use that *isn't* `_footer.html.liquid`? (there are **A LOT** of product hacks implemented using the footer template)

Looking at **[Pages] ** its also _head and _header templates but _footer is the last one rendered in HTML which is the best place for javascript hacks.

---
