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
Click (loupe) to see the details of your item. You can edit the information or the location of your item by clicking (pen) on the right.

### Edit multiple items
From the Listing select the items you want to edit by ticking the boxes on the left. Select Export items for update. Open the excel file and edit the information of your items.
Go back to your Workspace and click Update with import in the Add/Update panel on the left. Click Choose file and the select the excel files you have just updated. Click update with import.

### Move item to another location
Click (loupe) to see the details of your item and click (pen) on the right of “Location” to edit the location of the item.

## Create label

### Create item label
From the overview of the item (loupe), you have several icons available on the top. Click Create label, choose the size of your label and the font size. Select the parameters to print on the label (you can manually change the value as well) and click Download. Import the picture in your usual software to print labels.
To create label for multiple items, select your item from the general listing.Under the Actions dropdown menu select Create label.

## Link items

### Linked items
In the overview of the items (loupe), you may have a panel Linked items with a list of items. These are the items linked to your current items. It is particularly useful when you have related items (like for the same donor) but in different categories (i.e.: Cells, DNA, Plasma). Click on the (loupe) of linked item to directly access its details.

### Add link item
Linked item functionality can be useful when you have different material from a same donor (i.e.: PBMCs, plasma, RNA from Donor 1). Add your first item for this donor (i.e.: PBMCs), click (loupe) to access the overview of the item and click (link icon) on the top. Select the category of your new item (i.e. RNA), enter the informations and locations and add the item.
The linked items appears in the overview of the item and can be access directly by clicking on the linked item.
You may want to use the linked parameters function as well to facilitate the use of the linked item feature.

### Link existing items
Select the items to link from the Listing. The menu Items Selected appear on the left panel, select Link items.
The linked items appears in the overview of the item and can be access directly by clicking on the linked item.
The items can be unlinked by the same process, select Unlink items from the menu Items selected.

## Remove item

### Different kind of removal
There are 4 type of removal:
Remove when you use the item for your experiment.
Destroy when the item is removed from the inventory to be destroyed and have not been used in the context of experiment.
Internal Transfer when you send the item to another team. This item can be recovered in StockInLab.
External Transfer when you send the item to a collaborator outside your institute or a team who does not use StockInLab.

### Remove item from the listing
From the Listing click (-) on the right of the item to remove it. Choose the type of removal (what are the different kind of removal?), the spot(s)/quantity to remove, the date of removal and a comment if any. Click Remove.
Otherwise, you can remove item from the overview (loupe) by clicking (-) in the top icons bar.

### Date of removal
When you remove an item, you have to specify the date of the removal. You can choose any date, even an older date in case you are updating the inventory a posteriori.

### Remove multiple items
From the Listing select the items you want to remove by ticking the boxes on the left. In the dropdown menu Actions that appeared on the top, select Remove. For each item, select the type of removal (What are the different kind of removal?), the spot(s)/quantity to remove, the date of removal and a comment if any.

### Backup a removal action
In the Overview of the item (loupe), you can see the panel Remove from stock that reference the removal action for this item. Any removal can be backup by clicking (cloud arrow) icon on the right.

## Reserve item

### Reserve one item
From the Listing click (locket) icon on the left of the item you want to reserve. You can only reserve item with a green locket (red locket are already reserved by another member).
Alternatively, you can reserve an item from the Overview (loupe) by clicking (locket) icon in the ico bar on top.

### Reserve multiple items
From the Listing select all the items you want to reserve by ticking the boxes on the left. In the dropdown menu Actions that appeared, select Reserve.

### Lockets
Items with a green locket are free to reserve.
Items with a red locket are reserved by another member (see who reserved the item in the Overview (loupe) or by clicking the red locket). Contact the person who reserved before you use the item.

### Manage reservations
From the Listing tick the box My reservation on the top to see all the items you reserved.

### Cancel or withdraw reservation
Click on the red locket to withdraw/cancel your reservation (How to manage my reservations?).
If you have multiple items to cancel the reservation, select the items by ticking the boxes on the left and select Cancel reservation from the dropdown menu Actions that appeared.

## Search item

### Search general usage
All the items from one inventory appears by default in the table. If your item are sorted into Category, you can use the dropdown menu Category to filter.
Use the dropdown menu Parameters to search to perform a parametric search. Enter the value(s) of the parameter you are looking for: only items with the entered value appear in the table. Multiple parameters can be search at the same time, items responding to all the parameters appear in the table.
Use the dropdown menu Parameters in table to see the other details of your items (click (loupe) to see all the details of one item).

### Search multiple parameters
From the Listing use the dropdown menu Parameters to search and select as many as parameters you want for your search. enter the value(s) you want to search in the fields that just appear. All the items corresponding to the value(s) entered appear in the table.

### Search by QR/bar code
If you have used the label editing from StockInLab, a QRbar code was automatically printed in the label. The QRbar code allow you to simply access to the details of your item.
From the Home page or directly from one of your Inventory you can access the function search QR/bar code. Then you have 2 options:
Enter the ID printed under the QRbar code in the field Enter the QRbar code and click Search
or
Click Open camera  and scan the QR code by using your webcam (you might need to allow StockInLab to access your camera). Or use your bar code reader device to scan a bar code.

### Filters
In the Listing  many options to tick and dropdown menus are available on the top to make reading the table easier.
Tick With empty to see the items from your inventory with empty stock.
Tick My reservation to see your reserved items (How to reserve items?)
Tick My history to see your personal history of items entered in the inventory
Tick Expired to check if you have expired items (Does a parameter can be an expiry date?) in your inventory
Tick Draft items to access the list of the items saved as draft (What is a draft item?) (basically items with no location allocated)
Tick is public to see the items from your team’s listing set as public (What are the “Public items?).
Use the dropdown menu Category to see only the items from a selected category
Use the dropdown menu Member to see only the items from a selected member
Use the dropdown menu Parameters to search to perform a parametric search (How to use the search function?) among your items
Use the dropdown menu Parameters in table to make appear selected parameters directly into the table

### Draft item
Draft items are items with no location entered. The location can be added later by clicking (loupe) to see detail of the item  and click (pen) on the top to enter the location.

### Search into the public items
From the Public Items, use the multiparametric search in the same way as the search (How to use the search function?) in your team’s listing. Only the global parameters (What is a global parameter?) can be used for the search into the public items.
Use the dropdown menu Team and Categories to filter the results as well.

## View item

### See item details
From the Listing use the dropdown menu Parameters in table and select your parameters of interest to make appear directly in the table.
Otherwise, click (loupe) on the line of one item to access the overview with all details of this item.

### See location of the item
From the Listing click (loupe) on the right of the item you want to see the location. Under the Location panel you can see all the locations of your item (with the spot number if it is stored in a box).

### Select multiple items
From the Listing tick the box one the left of the items you want to select. a dropdown menu Actions appear on the top of the table with list of actions you can apply to the selected items.

### Public items
When you add an item you have the possibility to set the item as Public instead of Private. The Public items will appear in the listing Public accessible from the Home Page and are visible by other teams. The other teams can access the details of the Public items but the location remains hidden.
Public items can be filtered by team by using the dropdown menu Team or perform a parametric search among the public items.