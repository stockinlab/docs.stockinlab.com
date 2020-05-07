# Items

## Add item

### Add new item
::: tip
Before you start to add items, make sure your workspace is ready. You may need to create additional [parameters](./dashboard.md#parameters) and [locations](./dashboard.md#locations) in the [Dashboard](./dashboard.md) (restricted to group's administrators).
:::

Creation of categories is not mandatory. However, when you add a new item you have to assign a category and/or a name.

Two different methods are available to add new item(s). Under `ADD/UPDATE` in the left panel:
* Simple add: You can enter the details of an individual item, choose the location and click Add. If your items are stored in a box, select the spot(s) where your item is located. If it is not a box, simply add the quantity in the field provided.If you don’t know the location yet, you can save as draft. In the Extras panel, you can add comment to your item and attach files.
* Add with import: See the [procedure](./#use-an-excel-file-to-import-items) to use an Excel file.

### Use an Excel file to import items
Use these option if you have a bulk of items to enter into the inventory.
From the `Inventory` page or from any `Listing`, select `Add with import` in the left panel:
1. Tick the inventorie(s) in which you need to enter your new items.
2. Click Download template.
3. Open the file: one sheet per inventory is created.
4. Fill all the fields (the location cannot be enter in the file, you have to allocate after the import). The mandatory parameters appear in red.

::: warning
Make sure you enter the good value for the parameter set as “Select” in your workspace. To make the process easier, the ID of the options are referenced in a separate sheet. If you parameter is a “Select” type just enter the ID of the option (and note the name of the option).
:::

When your file is ready, go back to `Add with import`, select the file to import in `Choose file` and click `Import`.

::: warning
In case of error, the details of the error appear. It can be a missing mandatory field, an item with the exact same details (you can force to add), a blank line...
:::

Select the location for each new imported item.
All imported items without location go into [Draft items](./#draft-item) in your `Listing`. You can still edit their location later:
1. Click (loupe icon).
2. Select (edit location icon).
3. Choose the location of your item and save.

### Private/Public items
Private items can be seen by your team only. If you switch for Public, your items are visible in the Public Items listing (Global inventory/Public) by all the teams. The details of the item are visible for all but the location remains hidden. Users from other teams can contact you if they are interested by your item.

::: tip
Your items are automatically set as private. You can switch to public when you enter a new item in the menu `Simple add`: Switch the button from private to public under `Status`.
:::

### Pick location of the item
When you add a new item from the menu `Simple add` Simply select the location in the `Locations` panel.
* If your items are stored in a box, select the spot(s) where your item are located.
* If it is not a box, simply add the quantity in the field provided.
* If you items are in multiple locations, select the additional location(s) from the dropdown menu.
* If you don’t know the location yet, you can [save as draft](./draft-item).

When you add items from the menu `Add with import`, the locations are allocated after the import on the same principle.

### Add attachment(s)
You can attach document(s) in several formats (pdf, xlsx, docx, pptx, images…)
When you add a new item from the menu `Simple add`, attach the documents in the panel `Extras`. Click into the box to find into your computer the documents to attach

::: tip
You can also simply drag and drop into the box to attach your document.
:::

Other documents can be attached later to your item by clicking (attachement item icon) into the overview (loupe icon) of the item.

### Save as draft
In the case you don’t know the location of your item yet, don’t fill the location panel and click Save as draft.
Draft items can be found in the `Listing` : tick `Draft items` on the top.

To edit the location of your item:
1. Click (loupe icon) to access the overview of the item.
2. Select (edit location icon) on the left.
3. Edit the location and save
You item will be automatically transferred from the Draft items to the Listing.

### Mandatory fields
If mandatory parameters are not filled, the button Add remains disabled. Mandatory parameters can be set from the [Dashboard](./dashboard.md).

::: tip
When you add a new item from the menu `Simple add`, you can add more optional parameters directly from the panel `Parameters`
1. Select the parameters in the list (use the search bar to find easily the parameters).
2. Enter the value for the optional parameters.
:::

When you add items from the menu `Add with import`, the mandatory parameters appear in red in the table.

### Receive item from another group
When you received items transferred from another group, a notification appears into the left panel of your `Group homepage`.
All the items received are listed:
1. Click `Recover` to add the item into your inventory.
2. Select the Inventory where you want to store the received item.
3. Select the parameters to allocate for the details of the item. In case the parameter does not exist in your workspace you can choose to clone the parameter.
4. Choose the location of the item.

::: warning
Only the quantity received can be stored, you will get a error message if you are trying to store more.
:::

## Edit item

### Edit one item
From  `Listing` :
1. Click (loupe icon) to see the details of your item. 
2. Select `Edit` in the left panel. You have the choice between: `Edit parameters` and `Edit location`.
3. Edit the information and save.

### Edit multiple items
From `Listing` :
1. Select the items you want to edit by ticking the boxes on the left. 
2. Select `Export items for update` in the left panel.
3. Open the excel file created.
4. Edit the information of your items directly into the file.
5. Go back to the `Listing` page or to the `Inventory` page and select `Update with import` in the left panel.
6. Click `Choose file` to select the excel files you have just updated. 
7. Click `Import`.

### Move item to another location
From `Listing`:
1. Click (loupe icon) for the item you want to change the location.
2. Select `Edit location`  in the left panel.
3. Edit the location and save.

## Create label

### Create item label
From the overview of the item (loupe icon):
1. Click (create label icon) in the left panel.
2. Choose the size of your label and the font size. 
3. Select the parameters to print on the label (you can manually change the value as well).
4. Click `Download` (the label are exported into image file.
5. Import the picture in your usual software to print the labels.

::: tip
To create label for multiple items, select your items from the `Listing` and click `Create label` in the left panel.
:::

## Link items

### Linked items
In the overview of your item (loupe icon), you may have a panel `Linked items` with a list of items. These are the items linked to your current items. It is particularly useful when you have related items (i.e. different tissue from the same donor). 
Items from different Inventory can be linked together.

::: tip
Into the panel `Linked items` click (loupe icon) on the left of the linked item to directly access its details.
:::

### Add link item
In the overview of the item (loupe icon), you have a menu `Link item` in the left panel:
1. Select the inventory in which you want to enter a new linked item.
2. Enter the details of the linked item as explained in the part [Add item](#add-item).
3. Save the item.

### Link existing items
From `Listing`:
1. Select the items to link (you can select items from different inventories).
2. Click `Link items` (link icon) in the left panel.

The linked items appears in the overview of the item and can be access directly by clicking on the linked item.

::: tip
The items can be unlinked by the same process: select your items and click `Unlink items`  (unlink icon) in the left panel.
:::

## Remove item

### Different type of removal
There are 4 types of removal:
* `Remove` when you use the item for your experiment.
* `Destroy` when the item is removed from the inventory to be destroyed and have not been used in the context of experiment.
* `Internal Transfer` when you send the item to another team. This item can be recovered in StockInLab.
* `External Transfer` when you send the item to a collaborator outside your institute or a team who does not use StockInLab.

### Remove item from the listing
From `Listing`:
1. Click (remove icon) on the left of the item to remove it. 
2. Choose the [type of removal](#different-type-of-removal), the spot(s)/quantity to remove, the date of removal and a comment if any
3. Click `Remove`.

::: tip
Item can also be removed from the overview (loupe icon). Select (remove icon) in the left panel.
:::

### Date of removal
When you remove an item, you have to specify the date of the removal. You can choose any date, even an older date in case you are updating the inventory a posteriori.

### Remove multiple items
From `Listing`:
1. Select the items you want to remove by ticking the boxes on the left.
2. Click (remove item icon) in the left panel.
3. Select the [type of removal](#different-type-of-removal)and the date (same for all the selected items).
4. Choose the spot(s)/quantity to remove for each item.
5. Click `Remove`.

### Backup a removal action
In the overview of the item (loupe icon):
1. Scroll to the panel `Remove from stock`.
2. Click (backup icon) on the right of the item to backup.

::: warning
The item will go back into the stock, however all the actions are recorded and the [Administrator](./dashboard.md#audit-trail) can see all the activities into the system.
:::

## Reserve item

### Reserve one item
From  `Listing` click (locket icon) on the left of the item you want to reserve. You can only reserve item with a green locket (red locket are already reserved by another member).

::: tip
In the overview (loupe icon) click (locket icon) in the left panel to reserve the item.
:::

### Reserve multiple items
From `Listing`:
Select all the items you want to reserve by ticking the boxes on the left.
Click `Reserve items` (reserve icon) in the left panel.

::: tip
The items can be released by the same process: select your items and click `Cancel reservation`  (cancel icon) in the left panel.
:::

### Lockets
* Items with a green locket (green locket icon) are free to reserve.
* Items with a red locket (red locket icon) are reserved by another member. See who reserved the item in the overview (loupe icon) or by clicking the red locket (red locket icon). 

::: danger
Contact the person who reserved the item before using it.
:::

### Manage reservations
From  `Listing` tick the box `My reservation` on the top to see all your reserved items. 

### Cancel or withdraw reservation
From `Listing` or in the overview of the item (loupe icon) click on the red locket to withdraw/cancel [your reservation](#manage-reservations).
If you have multiple items to cancel the reservation, select the items in `Listing` by ticking the boxes on the left and select `Cancel reservation` (cancel icon) in the left panel.

## Search item

### Search unique parameter
From `Listing`:
1. Select the parameter to search in the dropdown menu `Parameters to search`.
2. Enter the value of the parameter or select it into the list.
3. Click `Search` to obtain the results.

::: tip
Display more parameters into the table by selecting the parameters in the dropdown menu `Parameters in table` **or** Click (loupe icon) to see all the details of the item.
:::

### Search multiple parameters
Follow the instruction from [Search unique parameter](#search-unique-parameter) and select multiple parameters from the dropdown menu `Parameters to search`.

### Search by QR/bar code
If you have used the [label editing](#create-label) from StockInLab, a QR/bar code was automatically printed in the label. The QR/bar code allow you to simply access to the details of your item.
From `Homepage` select `Search QR/bar code` in the left panelor from `Listing` click `Search code` on the top right:
* Enter the ID printed under the QRbar code in the field `Enter the QR/bar code` and click `Search`.
**Or**
* Click `Open camera`  and scan the QR code by using your webcam (you might need to allow StockInLab to access your camera). You can also use your bar code reader device to scan a bar code.

### Filters
In `Listing`  many options to tick and dropdown menus are available on the top to facilitate the readability of the table:
* Tick `With empty` to see the items from your inventory with empty stock.
* Tick `My reservation` to see your [reserved items](#reserve-item).
* Tick `My history` to see your personal [history](./history.md#history) of items entered in the inventory.
* Tick `Expired` to check if you have expired items (Does a parameter can be an expiry date?) in your inventory.
* Tick `Draft items` to access the list of the items saved as [draft](#draft-items).
* Tick `Public items` to see the items from your team’s listing set as [public](#public-items).
* Use the dropdown menu `Category` to see only the items from a selected category.
* Use the dropdown menu `Member` to see only the items from a selected member.
* Use the dropdown menu `Parameters to search` to perform a [parametric search](#search-unique-parameter) among your items.
* Use the dropdown menu `Parameters in table` to display selected parameters directly into the table.

### Draft items
[Draft items](#save-as-draft) are items with no location entered. To add the location:
1. Click (loupe icon).
2. Select `Edit location` (edit location icon) in the left panel.
3. Enter the location and save.

### Search into public items
* See the items from your group set as public by ticking the filter `Public items` in the `Listing`. You can search an item by following the instruction from [Search unique parameter](#search-unique-parameter)or [Search multiple parameters](#search-multiple-parameters) 

* See Public items from the other group from the `Homepage`. Click `Public`
under the menu `Global inventory` in the left panel. Use the filters on the top to facilitate the search among the public items (i.e. search per `Group`)

::: warning
Only the [global parameters](./dashboard.md#global-parameters) can be used for the search into the public items from other groups.
:::

## View item

### See item details
From `Listing`:
* Use the dropdown menu `Parameters in table` and select your parameters of interest to display directly in the table.
**Or**
* Click (loupe icon) on the left side of the item to access the overview with all details.

### See location of the item
From `Listing` click (loupe icon) on the left side of the item. The location is indicated into the panel `Location`.

### Select multiple items
From `Listing` tick the boxes on the left of the items you want to select. Multiple actions are available in the left panel. Items from different inventories can be selected at the same time.

::: tip
Select `View items` (view icon) in the left panel to see all the items selected.
::: 

### Public items
When you add an item you have the possibility to set the item as [Public](#private/public-items) instead of Private. 

* See the items from your group set as public by ticking the filter `Public items` in the `Listing`.
* See Public items from the other group from the `Homepage`. Click `Public`
under the menu `Global inventory` in the left panel.

You can perform a [search into the public items](#search-into-public-items).
