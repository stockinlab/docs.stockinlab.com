# Dashboard
 The Dashboard is group specific. From the `Home Page` choose your group. the `Dashboard` panel is visible at the bottom of the page only if you are [Administrator](#change-users-permission).

## Parameters

### Create parameter
Under the `Dashboard` menu:
Select  `Parameters`.
Check the list of [Global parameters](#global-parameters) (which are listed below your group parameters) before adding a parameter. The new parameter(s) created apply only to your group.  

If you want to add a new parameter for your group:
1. Click `Add` on top right.  
2. Enter the `Name` of your new parameter and add a description (optional)
3. Select the `Type` of your parameters among the list provided.
4. Allocate the parameter to one or several inventory(ies).

### Edit parameter
From `Parameters`, you can edit or delete a parameter by clicking (action icon) on the right.  
Select (pen icon) to edit the parameter. Select (trash icon) to delete the parameter. 

::: danger
If the parameter is already filled for one item it is impossible to delete it.
:::

### Global parameters
`Global parameters` are created by the super-administrator of your server and are common to every group. Global parameters are useful to search into [Public items](./items.md#search-into-public-items). 

### Expiry date parameter
If you want your parameter to be an expiry date, select `Expiry date` under `Type` when you create the parameter.  
When you add an item into the inventory, specify the day of expiry. You will get a notification when the date of this item is expired.  
Check the expired items by using the [filter](./items.md#filters) `Expired` in `Listing`.

### Mandatory parameters
Mandatory parameters can only be associated to a [Category](#create-category). 
1. If not existing, [create the parameter](#create-parameter)
2. During the creation of a new category, select the parameters that you want to be mandatory to fill in the field `Mandatory parameter`. If the category is already existing, simply [edit the category](#edit-category) to add the mandatory parameters.   

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
From `Categories`, you can edit or delete a category by clicking (action icon) on the right.
Select (pen icon) to edit the category. Select (trash icon) to delete the category.

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
From `Locations`, you can edit pr edit a location by clicking (action icon) on the right.
Select (pen icon) to edit the location. Select (trash icon) to delete the location.

::: danger
If the location already contains items it is impossible to delete it.
:::

### Create or edit box
When you create a new location:
 1. select `Box` in the dropdown menu `Type`.
2. Enter the number of rows and columns to edit the [overview](./storage.md#space-in-box) of the box. You can choose between numeric or alphabetic for the rows and columns name.

### Move a location with its content to another location
Under the menu `Dashboard`:
1. Select `Locations`.
2. Click (action icon) on the right of the location to move and select (pen icon).
3. Change the dependence in the dropdown menu `Dependence`.
4. Click `Update`.

## Import workspace

### Import with Excel file
Instead of entering manually your categories, parameters and locations, you can use the Excel template provided:
1. Under the menu `Dashboard` select `Import workspace`
2. Click `Download template` on top right.
3. Open the Excel file.
4. Fill every sheets with the details of your `Categories` `Parameters`and `Locations`. 
5. Save the file.
6. Go back to `Dashboard > Import workspace`. 
7. Click `Select File`  to upload the Excel file.
8. Click `Import`.

## User management

### Add new user(s)
Under the menu `Dashboard`:
1. Select `Members`.
2. Click `Manage` on top right.
3. Type the name of the member(s) to add to your group in the input `Choose members` or select him/her in the list.
4. Select his/her [role](#different-roles).
5. Click `Update members`.

### Different roles
* `Member`can access to all the inventories/listings and add/edit items.
* `Administrator` has the same permission as Member and can also access to the dashboard and audit trail of his/her group.
* `Ex-Member` has no access anymore to the system. All actions he/she made into StockInLab remained visible for the other users.

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
