A Chrome extension for running external search queries on the subject of a selected GMail message.
The query results are opened in a new tab.

## Installation

This extension is not published in the Chrome Web Store. Follow the instructions in this section to install an unpacked extension in developer mode.

Open the [chrome://extensions](chrome://extensions) page in your Google Chrome Browser and make sure that the `Developer mode` knob is turned on.

![Developer Mode](docs/dev_mode_knob.png)

Press the `Load unpacked` button and select the top-level directory of the `gmail-xsearch-chrome` project. If the loading is successful, you should see the extension card appearing in your page.

![Extension Card](docs/extension_card.png)

## Configuration

Press the ![Extensions Button](docs/extensions_button.png) button in your browser and select the `GMail External Search` extension from the list to open the extension configuration dialog.

![GMail External Search](docs/gmail_external_search.png)

The configuration dialog displays the default search query template, which uses `google.com` search engine to run the query.

![Configuration Dialog](docs/config_dialog.png)

Change the search query according to your needs and press `ENTER` to save the settings. Specify the `${SUBJECT}` variable in the query where the email subject text should be substituted. 

For instance, the following query runs an email subject search in the Google Groups archives.
```
https://groups.google.com/search/conversations?inOrg=true&q=subject%3A"${SUBJECT}"
```

## Usage

Open an email message in GMail and note the ![Search Icon](docs/search_icon.png) external search icon in the toolbox area.
> You may need to press the ![Dots Icon](docs/dots_icon.png) menu button to see the full list of tools including the external search.

Press the ![Search Icon](docs/search_icon.png) external search icon to open a new tab with the query results for the subject of the selected message.
