# Dashboard
 From the `Inventory` page, access the `Dashboard` in the left panel. Only [Administrators](#change-users-permission) can access the `Dashboard`.

## Parameters

### Create parameter
Under the `Dashboard` menu:
Select  `Parameters`.
Check the list of [Global parameters](#global-parameters)before adding a parameter (the new parameter created apply only to your group).
Click `Add` on top right.
Enter the `Name` of your new parameter and add a description (optional)
Select the `Type` of your parameters among the list provided.
Allocate the parameter to one or several inventory(ies).

### Edit parameter
From the overview of `Parameters`, you can edit a parameter by clicking (pen icon).
Click (trash icon) to delete the parameter.

::: danger
If the parameter is already filled for one item it is impossible to delete it.
:::

### Global parameters
`Global parameters` are created by the super-administrator of your server and are common to every group. Global parameters are useful to search into [Public items](./items.md#search-into-public-items). 

### Expiry date parameter
If you want your parameter to be an expiry date, select `Expiry date` under `Type` when you create the parameter.
When you add an item into the inventory, specify the day of expiry. You will get a notification when the date of this item is expired.
Check the expired items by using the [filter](./items.md#filters) `Expired` in `Listing`.

## Categories

### Create category
Under the `Dashboard` menu:
1. Select `Categories`. 
2. Click `Add` on top right and choose in which inventory you want to create the new category.
3. If the new category depends on another category, select the parent category first under `Dependence`. If not, go directly to step 4.
4. Enter the name of your new category.

Optional steps:
* `Description` to enter more details about the category.
* `Status` to hide the category in the inventory.
* `IRB reference` and `IRB expiry date`: i.e. for human samples (patient cohort).
* List of `Mandatory parameters`.

::: tip
Add a sub-category directly from the overview of `Categories`: Click (+ icon) on the right of the category.
:::

### Edit category
From the overview of `Categories`, you can edit a category by clicking (pen icon).
Click (trash icon) to delete the category.

::: danger
If the category already contains items it is impossible to delete it.
:::

## Locations

### Create location
Under the `Dashboard` menu:
1. Select `Locations`. 
2. Click `Add` on top right.
3. If the new location depends on another location, select the parent location first under `Dependence`. If not go directly to step 4.
4. Enter the name of your new location. 
5. Select the `Type` of the location. It is set as [box](#create-or-edit-box) by default but many options are available.
6. 
::: warning
If your location is a [box](#create-or-edit-box)  it is mandatory to enter the number of rows and columns to edit the [overview](./storage.md#space-in-box) of the box. You can choose between numeric or alphabetic for the rows and columns name.
:::

Optional steps:
* `Description` to enter more details about the location.
* `Unique code` if your location use barcoding (Enter the number of the barcode).
* `Status` : switch to *Inactive* to hide the location in the inventory.
* `Temperature`.

::: tip
Add a sub-location directly from the overview of `Locations`: Click (+ icon) on the right of the location.
:::

### Edit location
From the overview of the `Locations`, you can edit a location by clicking (pen icon).
Click (trash icon) to delete the location.

::: danger
If the location already contains items it is impossible to delete it.
:::

### Create or edit box
When you create a new location, select `Box` in the dropdown menu `Type`.
Enter the number of rows and columns to edit the [overview](./storage.md#space-in-box) of the box. You can choose between numeric or alphabetic for the rows and columns name.

### Move a location with its content to another location
Under the menu `Dashboard`:
1. Select `Locations`.
2. Click (pen icon) on the left of the location to move.
3. Change the dependence in the dropdown menu `Dependence`.
4. Click `Update`.

## Import workspace

### Import with Excel file
Instead of entering manually your categories, parameters and locations, you can use the Excel template available in `Dashboard > Import workspace`:
1. Click `Download template` on top right.
2. Open the Excel file.
3. Fill every sheets with the details of your `Categories` `Parameters`and `Locations`. 
4. Save the file.
5. Go back to `Dashboard > Import workspace`. 
6. Click `Select File`  to upload the Excel file.
7. Click `Import`.

## User management

### Add new user(s)
Under the menu `Dashboard`:
1. Select `Members`.
2. Click `Manage members` on top right.
3. Type the name of the member(s) to add to your group in the input `Choose members` or select in the list.
4. Select their [role](#different-roles).
5. Click `Update members`.

### Different roles
* `Member`can access to all the inventories/listings and add/edit items.
* `Administrator` has the same permission as Member and can also access to the dashboard and audit trail of his group.
* `Ex-Member` has no access anymore to the system. All actions he made into StockInLab remained visible for the other users.

### Change users permission
Under the menu `Dashboard` 
1. Select `Members`. 
2. Click (pen icon) on the right of the user you want to change the permission.
3. Select the new [role](#different-roles) and save.

## Audit trail

### Description
All activities from every users (included the administrator) in your group are logged.
The administrator can see the activities from his group in the menu `Dashboard > Audit trail`. 

::: tip
* Use the Filter `Member` to see the activities from a selected member.
* Activities relative to the same item are referenced together and can be shown by clicking (loupe icon).
:::

### Audit trail access
Only the administrators can access the audit trail menu of the group. the super-administrators can access the audit trail from every groups.