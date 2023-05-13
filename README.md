# Site

This Repo only contains a script file that does the following.
- Gets current page URL using window.location.href
- Gets iframe parameter from the URL if it exists.
- Injects an iframe element to the page and displays the iframe url below it.
- Creates a hoverable button element above the iframe element.
- All these new elements are wrapped inside a parent div.

To use this script, please include the following embed in head element.
```
<script  defer  type="text/javascript"  src="https://github.com/srihari-m-s/site/blob/main/iframe-catcher.js"></script>
```
defer attribute is used to make sure the script is loaded after the web page.
