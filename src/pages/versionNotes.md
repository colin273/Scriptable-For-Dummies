## Version Notes


### 1.6.1 (Nov 5, 2020)

- New: Scripts in the gallery can now be shared with a link.
- Bugfix: A few layout issues in the gallery have been fixed.

### 1.6.0 (Nov 5, 2020)

- New: The new gallery contains example scripts to get you started using Scriptable. Have a script you'd like to share with the community? You can submit your script for consideration to be included in the gallery over at gallery.scriptable.app/submit
- New: Create dynamic colors with the Color.dynamic(lightColor, darkColor) function. These colors automatically adjust to match the system appearance and work great with widgets.
- New: The LinearGradient have new startPoint and endPoint properties to control the direction of the gradient.
- New: FileManger has a new cacheDirectory() function to get the path to the directory suitable for caching data.
- New: Request has a new timeoutInterval property that specifies the duration a connection attempt must remain idle for the request to timeout.
- New: Reminder has a new isOverdue property that indicates if a reminder is overdue.
- New: Uses the scriptable:///run/{scriptName} URL scheme when running a script. The old scriptable:///run?scriptName={scriptName} is still supported. The new one is compatible with more online services when defining a redirect URL as part of an OAuth flow.
- Bugfix: Accessing the hex property on a Color object would sometimes cause the app to crash.
- Bugfix: Scripts would sometimes fail when it used the CallbackURL API, had "Always Run in App" enabled and was running from the Share Sheet.
- Bugfix: Fixes typos in the documentation.

### 1.5.3 (Oct 10, 2020)

- Bugfix: Sometimes UI wouldn't be shown when presented from a script running in the action extension.
- Bugfix: Providing corner radii larger than half the width or height when calling addRoundedRect() would cause the app to crash.
- Bugfix: Sometimes multiline texts wouldn't respect the alignment in a widget.

### 1.5.2 (Oct 6, 2020)

- Bugfix: Images would sometimes be resized when loaded through a Shortcuts actions. This was necessary pre-iOS 14 but is no longer necessary with the new in-app intent handling.

### 1.5.1 (Oct 5, 2020)

- New: Widgets now support displaying texts and images in grids. Call addStack() on a ListWidget to add a horizontal stack to the widget. You can even nest stacks to create a mix of vertical and horizontal layouts.
- New: Texts, images and stacks in a widget can now open a URL when tapped. This can be used to configure different tap targets in a widget, each opening different URLs when tapped.
- New: Adds the SFSymbol API which can be used to add SF symbols to widgets.
- New: Adds settings on WidgetImage to configure if it should be resizable and if the image should fit or fill the available space. These new settings may come in handy when showing an SF symbol as an image.
- New: WidgetText has a new minimumScaleFactor property. Set it to scale down the text if it does not fit into the available space.
- New: Add shadows to texts with the new shadowRadius, shadowColor and shadowOffset properties on WidgetText.
- New: Use the new addDate() function on ListWidget and WidgetStack to add a date that updates periodically without running the script. Use the returned instance of WidgetDate to configure how the date is displayed.
- New: The ListWidget has a new refreshAfterDate property. Use this to specify the date which a widget can refresh after. The widget is not guaranteed to refresh at this exact date. The property is most suited to ensure that widgets do not refresh too often.
- New: You can now use the Location API in a widget.
- New: The script selector now shows icons when configuring a widget.
- New: Adds Shortcuts action to refresh all Scriptable widgets.
- New: There are two new example scripts called “Random Scriptable API” and “Read MacStories”.
- Bugfix: This update improves the stability of widgets and fixes an issue where widgets would sometimes have their content swapped.
- Bugfix: Constructing a Color object would sometimes fail when passing an alpha value.
- Bugfix: The app would sometimes crash when setting up the schedule for a notification.
- Bugfix: The documentation for addStack() mentioned that calling the function would return an instance of WidgetSpacer instead of a WidgetStack.
- Bugfix: The FileManager would sometimes show a warning saying that a file did not exist even though it did.

### 1.5.0 (Sep 16, 2020)

- New: The new ListWidget API can be used to create widgets that display a list of texts and images. These widgets can be displayed on the Home screen on iOS 14.
- New: The new "News in Widget" example script shows how to build a widget. You find the example script in the in-app settings.
- New: Scriptable's Shortcuts actions now use the new in-app intent handling on iOS 14. By doing that, the actions can now use file bookmarks and can utilise more memory. Please visit the in-app settings to learn more about file bookmarks.
- New: Scripts have new colors to better fit in with modern versions of iOS.
- New: Scripts can now be added to the Home screen from the script's settings.
- New: The response from executing a Request now contains the cookies set by the server.
- New: Use the new titleFont and subtitleFont properties on UITableCell to set the font of titles and subtitles in tables.
- New: Use the new setFont() function on DrawContext to specify the font to be used when drawing text to the context.
- Deprecated: setFontSize() on DrawContext have been deprecated. Use the new setFont() function instead.
- Bugfix: Sometimes getImage() on DrawContext would throw an error when nothing but a text had been drawn to the context.

### 1.4.14 (Jul 27, 2020)

- Bugfix: Reminder.dueDateIncludesTime did not work on recent version of iOS.
- Bugfix: WebViews would not be correctly removed from memory, causing videos to keep playing even after the script have finished running and the web view have been dismissed.
- Bugfix: WebView.evaluateJavaScript() would sometimes fail with an error saying that two JavaScripts were being evaluated at the same time.

### 1.4.13 (Jun 13, 2020)
- Bugfix: A cancel action would automatically be appended to alerts on the iPad, even when the alert had actions associated with it.
- Bugfix: Fixes typos in the documentation.

### 1.4.12 (Jun 4, 2020)

- Bugfix: The app would sometimes crash when adding a cancel action to an alert and presenting it on the iPad.

### 1.4.11 (May 4, 2020)

- New: There's two new app icons to choose from.
- New: Adds DocumentPicker.exportData() for exporting a Data object to a file.
- New: When exporting a file with the DocumentPicker, the filename will now default to the current date and time.
- Bugfix: When picking a countdown duration using the DatePicker API, the duration of the countdown would default to the current hour and minute of the day.
- Bugfix: When using the Alert API on an iPad and presenting with presentSheet(), the promise was not fulfilled when cancelling the operation by tapping outside the sheet.
- Bugfix: A few minor improvements to the documentation.

### 1.4.10 (May 2, 2020)

- New: Improved support for pointers on iPadOS.
- Bugfix: On the iPad the log could be collapsed even when it was placed on the left- or right-hand side of the script. After collapsing the log, it could not be expanded. Collapsing the log is now properly disabled when it's placed on the left- or right-hand side of the screen.
- Bugfix: The promised returned by Safari.openInApp() completed too soon, making it impossible to present a table or a new website after Safari was dismissed.
- Bugfix: Returning an empty string from the Run Script Inline Shortcuts action would crash Shortcuts.
- Bugfix: A few minor improvements to the documentation.

### 1.4.9 (Mar 5, 2020)

- New: When the log is expanded you'll get an option to export and share the log.
- New: There's now a setting to hide the date and time from messages in the log. This can be enabled and disabled when the log is expanded.
- New: The QuickLook, UITable, WebView and Safari APIs now lets you pass a parameter indicating that a view should be presented in fullscreen. For example myTable.present(true). This is particularly useful on the iPad.
- New: Use Reminder.dueDateIncludesTime to specify if the due date on a reminder should include a time upon assignment. This lets you create reminders that are due on a date but doesn't have a time. The property defaults to true.
- New: Use the new instance method loadFile() on WebView to load a file into a web view.
- Bugfix: Improves error message shown when attempting to invoke QuickLook.present() on an object that does not support quick looking.

### 1.4.8 (Jan 19, 2020)

- New: The JetBrains Mono font is now available to be used in the editor.
- Bugfix: Sometimes files couldn't be accessed when they were passed into the "Run Script" shortcut action and the action was configured to open the app.
- Bugfix: FileManager.fileName() would return URL encoded file names.

### 1.4.7 (Jan 10, 2020)

- Bugfix: A bug had snuck into the previous release causing some scripts to timeout prematurely when running in Shortcuts or with Siri. When this happened, you would get an error saying that the script completed without returning an output, presenting a UI or having Siri speak a message and that you should call Script.complete(), even though Script.complete() already got called. This is now fixed.
- Bugfix: The link to the forum was no longer working. This have now been fixed.

### 1.4.6 (Jan 9, 2020)

- New: Returning a value in a script using JavaScript’s “return” keyword will now provide the value as output when running the script in a shortcut. As a result, many scripts written in the "Run Inline Script" action, which was introduced in the previous update, can now be made more concise.
- Bugfix: Scrips that invoke Script.setShortcutOutput() or that return a value will now finish faster when running in a shortcut.
- Bugfix: Shows a proper error message when running a script in a shortcut takes too long.

### 1.4.5 (Jan 9, 2020)

- New: There is a new "Run Inline Script" shortcut action. The new action doesn't run an existing script but instead lets you write any script in the multiline text field that's shown when tapping "Show More". The action can do anything that the existing "Run Script" action can do.
- Bugfix: Sometimes the Request API would returned cached data which wasn't expected.
- Bugfix: When passing an image as input to the "Run Script" action in Shortcuts and checking the option to open Scriptable to run the script, the image would not be properly passed into Scriptable.
- Bugfix: Fixes incorrect comments in the "Welcome to Scriptable" script that is installed when first opening the app.

### 1.4.4 (Nov 12, 2019)

- This update includes fixes for various minor bugs and visual glitches.

### 1.4.3 (Oct 2, 2019)

- A bug had snuck into the previous build causing right aligned texts in a UITable to be clipped under some conditions.

### 1.4.2 (Sep 30, 2019)

- Adds a call to Script.complete() in the example scripts. It's a good idea to call Script.complete() when running a script from Siri or in the Shortcuts app. This will make the script terminate faster. Please read the documentation for more information on this.
- Fixes some minor layout issues.

### 1.4.1 (Sep 25, 2019)

- This update adds icons to the context menu that is shown when long pressing a script. It also fixes a haandful of minor bugs.

### 1.4.0 (Sep 19, 2019)

The focus of this update is to make Scriptable feel right at home on iOS 13 with a refreshed design, input and output parameters in Siri Shortcuts, support for opening the documentation in a new window and much more.

- New: Redesigned editor that takes better advantage of the screen. On the iPad, you can drag the log to place it either on the left, right or in the bottom.
- New: Pass input to a shortcut from the Shortcuts app and read it with args.shortcutParameter.
- New: Pass plain texts, URLs, images and files to a shortcut from the Shortcuts app and read it with args.plainTexts, args.urls, args.images and args.fileURLs.
- New: Return output from a script to the next shortcut in the Shortcuts app using Script.setShortcutOutput()
- New: The list of scripts have had a minor design refresh to make it feel less cluttered.
- New: Open the documentation in a new window on the iPad by pressing the ellipsis in the documentation and select "Open in New Window".
- New: Light and dark mode now respects the system appearance. You can override the theme in the settings.
- New: Quick Actions are now available on the iPad. Add Quick Actions from the settings to quickly run a script by long pressing the app icon on the home screen.
- New: The order of scripts can now be synced between devices using iCloud. Enable this from the settings.
- New: Use ESC or CMD+. on an external keyboard to dismiss any view presented with the QuickLook API.
- New: The documentation now shows if properties are read-only. This have also been added to the online documentation.
- New: Adds a Timer API which can be used to schedule timers that fire after a time interval.
- New: Adds a DateFormatter API to create textual representations of dates and parse strings into dates.
- New: Adds a RelativeDateTimeFormatter API that creates a textual representation communicating the amount of time between two dates.
- New: Adds Device.isUsingDarkAppearance() which returns true if the device is currently using the dark appearance.
- New: Adds fileManager.creationDate(), fileManager.modificationDate() and fileManager.fileSize().
- New: Adds Photos.save() which saves an image to your photo library.
- New: Adds DocumentPicker.openFile() and DocumentPicker.openFolder() which makes it easier to present a document picker that allows picking any single file or folder.
- New: Adds Calendar.createForReminders() and Calendar.findOrCreateForReminders() APIs which creates new reminder lists.
- New: Adds calendar.remove() which removes a calendar, for example a reminder list.
- New: Adds fileManager.allFileBookmarks() which is be used to programmatically get a list of all the bookmarks you have created.
- New: Adds a new property "dates" on a Contact. This hold dates that are important to a contact.
- New: Adds new properties on Contact to check which values can be set and read on a contact. This can be used to check if a contacts container supports a particular feature.
- New: xmlParser.didStartElement() now takes two parameters instead of one. In addition to the element name, a key value pair containing all attributes associated with the element is now provided.
- New: Adding a closing curly bracket will automatically adjust the indentation if necessary.
- New: The "Reminders Due Today" example script have been updated to be more readable and show how reminders can be marked as completed and tables can be refreshed when cells are selected.

### 1.3.4 (Jun 11, 2019)

- Bugfix: Fixed issue where Calendar.presentPicker returned an empty array when selecting multiple calendars.
- Bugfix: Web views can not be presented with myWebView.present() even after evaluating JavaScript in the web view.
- Bugfix: Updated the documentation to explicitly say that UITableRows onSelect must have a value for dismissOnSelect to have an effect.
- Bugfix: Updated documentation of properties on the Contact bridge to make it clear that when updating email addresses, phone numbers, social profiles and postal addresses, the entire array of values must be provided.
- Bugfix: Fixed various typos in the documentation and example scripts.

### 1.3.3 (May 1, 2019)

- This update fixes an issue where using file bookmarks would sometimes result in permission errors when the underlying file path was used.

### 1.3.2 (Apr 25, 2019)

- Bugfix: Improves auto completion in scripts with special characters.
- Bugfix: Fixed issue where lists were not correctly shown in the documentation, e.g. the list of supported notification sounds.
- Bugfix: Fixed issue where DrawContext.opaque incorrectly stated that the default value was false.
- Bugfix: Fixed issue where Contact.birthday was not always persisted.
- Bugfix: Fixed various typos in the documentation.

### 1.3.1 (Mar 31, 2019)

- Bugfix: Fixed issue wherre Siri Shortcuts weren't "donated" when the script was run from the list of scripts.
- Bugfix: The "Welcome to Scriptable" script referenced the old "gear" icon for accessing script settings but it now references the new "toggles" icon.

### 1.3.0 (No Date Available)

- New: The new rich notification composer lets you easily create notifications to run your scripts on a schedule. There’s a lot parameters for tweaking your notification including title, body, sound and the buttons to display in the notification. Access the rich notification composer from settings and script settings.
- New: Add multiple Siri Shortcuts to a script. Each shortcut can define a set of arguments that is passed to your script when running it from a shortcut. This lets you vary your script based on the shortcut that was used to run it.
- New: Add bookmarks to files and folders to work with those from your scripts even if the files aren’t stored in Scriptable documents folder. After you have created a bookmark from settings, you can use the bookmarkedPath(name) function on a FileManager to get a path to the file or folder.
- New: Use importModule to import one script into another. See the documentation on the "importModule" function and the global variable "module”.
- New: Run scripts directly from the list of scripts. Tap the three dots to edit the script.
- New: Run scripts from the home screen. Visit the settings of a script to add it to your home screen. You can use the new config.runsFromHomeScreen to determine if a script is run from the home screen.
- New: There’s now a list of all your shortcuts in the settings. You can also add a new shortcut from here.
- New: The DatePicker API will display a user interface for selecting a date, a time, both or the duration of a timer.
- New: Adds downloadFileFromiCloud(filePath), isFileStoredIniCloud(filePath) and isFileDownloaded(filePath) on FileManager. These new functions make it easier to work with files in iCloud.
- New: read(filePath), readString(filePath) and readImage(filePath) on FileManager will now show warnings when attempting to perform operations on a file that does not exist. Remember to use fileExists(filePath) to check if a file exists.
- New: You can now log warnings using console.warn() or the global logWarning() functions. Warnings behave like regular log statements but will have a special appearance in the console.
- New: There’s a new setting in the documentation to show deprecated APIs. It is not recommended for new scripts to use deprecated APIs.
- New: Increased the contrast of texts in the documentation.
- New: Setting the “openEditor” query parameter to “true” in the scriptable:///run URL scheme will show the editor when running the script opposed to running directly from the list of scripts.
- New: The “Quick Actions” setting screen now shows icons of the scripts.
- New: Shows support e-mail address in settings when device is not configured to send mails.
- Deprecated: args.all and args.length. Please use args.plainTexts, args.urls, args.fileURLs and args.images to examine the arguments supplied by a share sheet.
- Deprecated: Notification.current(). Use args.notification instead.
- Deprecated: URLScheme.allParameters() and URLScheme.parameter(name). Use args.queryParameters instead.
- Bugfix: Adds missing WebView.loadURL static function.
- Bugfix: Fixed issue where UITableRow.backgroundColor was not respected in Siri.
- Bugfix: Fixed issue where links to the scriptable:/// URL scheme were not opened from a WebView.
- Bugfix: Fixed size of icons in Spotlight.
- Bugfix: Fixed issue where changes to a cells title or subtitle colors weren’t reflected when reloading.
- Bugfix: Fixed issue where the number of messages in the log was not visible.
- Bugfix: Fixed an issue where the order of the scripts on the “Quick Actions” setting screen could be incorrect.