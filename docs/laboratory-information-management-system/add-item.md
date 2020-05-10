# Add item

## Add new item
::: tip
Before you start adding items, make sure your workspace is ready. You may need to create additional [parameters](/laboratory-information-management-system/dashboard-parameters.html#create-parameter) and [locations](/laboratory-information-management-system/dashboard-locations.html#create-location) in the `Dashboard`. Access to the `Dashboard` is restricted to the [administrator](/laboratory-information-management-system/dashboard-users-management.html#users-management)).
:::

Creation of categories is not mandatory. However, when you add a new item you have to assign a category and/or a name.

To add new item(s):
1. From your `Groupe page` select the `Inventory` where you want to add the item(s).

::: tip
the button `Add` is also available directly from the `Group page`. If you click it from this page, you will be prompted to select in which inventory you want to add th new item(s).
:::
2. Select (add icon) on top right of the page.
3. Two options are available:
    - `Simple add` if you want to add on or several items with the same parameters.
    - `Add with import` if you want to add a bulk of items with different parameters. This [procedure](/laboratory-information-management-system/add-item.html#use-an-excel-file-to-import-items) require to fill an Excel file.  
The following steps refer to `Simple add`.   
4. Set your item as [public or private](/laboratory-information-management-system/add-item.html#private-public-items). 
5. Fill all the [mandatory parameters](/laboratory-information-management-system/dashboard-parameters.html#mandatory-parameters) (if any). Additional parameters you might want to enter for this item can be selected from the left panel.
6. Enter the location. If the location is a box you need to select the spot(s). If it is not a box, simply add the quantity in the field provided. If you don’t know the location yet, you can save as draft. 
7. [Optional] Add comment and/or attach files in `Extra`.


## Use an Excel file to import items
Use these option if you have a bulk of items to enter into the inventory.
From the `Inventory` page or from any `Listing`, click (add icon) on top right of the page and select `Add with import`:
1. Tick the inventorie(s) in which you need to enter your new items.
2. Click Download template.
3. Open the file: one sheet per inventory is created.
4. Fill all the fields (the location cannot be enter in the file, you have to allocate after the import). The mandatory parameters appear in red.

::: warning
Make sure you enter the good value for the parameter set as “Select” in your workspace. To make the process easier, the ID of the options are referenced in a separate sheet. If your parameter is a “Select” type just enter the ID of the option (and note the name of the option).
:::

When your file is ready, go back to `Add with import`, select the file to import in `Choose file` and click `Import`.

::: warning
In case of error, the details of the error appear. It can be a missing mandatory field, an item with the exact same details (you can force to add), a blank line...
:::

Select the location for each new imported item.
All imported items without location go into [Draft items](/laboratory-information-management-system/search-item.html#draft-items) in your `Listing`. You can still edit their location later:
1. Click (loupe icon).
2. Select (edit location icon).
3. Choose the location of your item and save.

## Private/Public items
Private items can be seen by your team only. If you switch for Public, your items are visible in the Public Items listing (Global inventory/Public) by all the teams. The details of the item are visible for all but the location remains hidden. Users from other teams can contact you if they are interested in your item.

::: tip
Your items are automatically set as private. You can switch to public when you enter a new item in the menu `Simple add`: Switch the button from private to public under `Status`.
:::

## Pick location of the item
When you add a new item from the menu `Simple add` Simply select the location in the `Locations` panel.
* If your items are stored in a box, select the spot(s) where your item are located.
* If it is not a box, simply add the quantity in the field provided.
* If you items are in multiple locations, select the additional location(s) from the dropdown menu.
* If you don’t know the location yet, you can [save as draft](/laboratory-information-management-system/search-item.html#draft-items).

When you add items from the menu `Add with import`, the locations are allocated after the import on the same principle.

## Add attachment(s)
You can attach document(s) in several formats (pdf, xlsx, docx, pptx, images…)
When you add a new item from the menu `Simple add`, attach the documents in the panel `Extras`. Click into the box to find into your computer the documents to attach.

::: tip
You can also simply drag and drop into the box to attach your document.
:::

Other documents can be attached later to your item by clicking (attachement item icon) into the overview (view icon) of the item.

## Save as draft
In the case you don’t know the location of your item yet, don’t fill the location panel and click Save as draft.
Draft items can be found in the `Listing` : tick `Draft items` on the top.

To edit the location of your item:
1. Click (loupe icon) to access the overview of the item.
2. Select (edit location icon) on the left.
3. Edit the location and save
You item will be automatically transferred from the Draft items to the Listing.

## Mandatory fields
If mandatory parameters are not filled, the button Add remains disabled. [Mandatory parameters](/laboratory-information-management-system/dashboard-parameters.html#mandatory-parameters) can be set from the `Dashboard`.

::: tip
When you add a new item from the menu `Simple add`, you can add more optional parameters directly from the panel `Parameters`
1. Select the parameters in the list (use the search bar to find easily the parameters).
2. Enter the value for the optional parameters.
:::

When you add items from the menu `Add with import`, the mandatory parameters appear in red in the table.

## Receive item from another group
When you received items transferred from another group, a notification appears into the left panel of your `Group homepage`.
All the items received are listed:
1. Click `Recover` to add the item into your inventory.
2. Select the Inventory where you want to store the received item.
3. Select the parameters to allocate for the details of the item. In case the parameter does not exist in your workspace you can choose to clone the parameter.
4. Choose the location of the item.

::: warning
Only the quantity received can be stored, you will get a error message if you are trying to store more.
:::
