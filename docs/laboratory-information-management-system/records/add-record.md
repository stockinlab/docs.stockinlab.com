# Add record

## Add new record
::: tip
Before adding records
1. Make sure the workspace is ready. You may need to create additional [parameters](/laboratory-information-management-system/dashboard/parameters-management.html#create-parameter) and [locations](/laboratory-information-management-system/dashboard/locations-management.html#create-location) in the Dashboard. 
Access to the Dashboard is restricted to the [administrator](/laboratory-information-management-system/dashboard/members-management.html).
2. Creation of [categories](../dashboard/categories-management.md) is not mandatory. However, when you add a new record you have to assign a category and/or a name.
:::

1. Click Add button on top right of the Team page or the Inventory page (in that case the Inventory will be pre-filled)
2. Select the Inventory (oi you click Add from the Team page)
3. The record is set as Private by default. Switch to [Public](#privatepublic-records) if needed.
4. Choose a category or enter a name (or both)
5. Fill the collection date
6. Fill the required parameters if any
7. Eventually select other parameters to fill from the list on the left
8. Enter the location(s)
    * Option 1 - location is a box: select the spots to store your record(s) (number of spots will correspond to the quantity). For each spot you can add a volume (optional)
    * Option 2 - location is not a box: enter the quantity of your record
    * Option 3 - location is currently unknown: do not fill the location and click [Save as draft](#save-as-draft) button at the bottom of the page
9. Manage the permission to access this record. By default, the members of your team can *see and edit* the record. [Change](#change-access-permission-to-a-record) the permission if needed and/or [add](#add-permission-to-other-users) permission to other users (who are not member of the team).
10. Add comment and attachement (optionnal)
11. Click Add button or Save as draft button 

## Change access permission to a record
By default, added records are set as *see and edit* to all team members. Other permissions are available to restrict access to the record:
* **see and edit** allows full action on the record: see and edit the parameters,see the location and remove stock
* **see everything** allows to see the parameters and location and remove stock. However the parameters cannot be edited
* **see only parameters** is the more restrictive permission. It only allows to see the parameters of the records. Location is hidden, stock cannot be removed and edition is unavailable. 

Choose the permission for the members when adding the record or change anytime in the record overview by clicking Permissions button.

::: warning
Administrators are automatically set with **see and edit** permission. Their permission cannot be changed.
:::

## Add permission to other users
You can give access to your record to someone not in your team.

Give permission when you add the record
1. Click Add button on top right of the Team page or Inventory page
2. In the Permissions panel, Search the name of the user and choose a permission
3. Click Save button

Give permission to an existing record
1. Click Permissions button in the overview of the record 
2. Search the name of the user and choose the permission
3. Click Confirm button


## Use an Excel file to import records
Use these option if you have a bulk of records to enter into the inventory.

1. From the Team page or the Inventory page click Import button on top right
2. Tick the inventorie(s) in which you need to enter your new records
3. Click Download button
4. Open the file: one sheet per inventory is created
5. Fill all the fields. The required parameters appear in teal

::: warning
Make sure you enter the good value for the parameter set as “Select” in your workspace. To make the process easier, the ID of the options are referenced in a separate sheet. If your parameter is a “Select” type just enter the ID of the option (and note the name of the option).
:::

When the file is ready, go back to Team > Import 
1. Click Chose file button in the right panel
2. Select your file and upload
3. Revise the records imported with error. It can be a missing mandatory field, a blank line...
4. Add location when missing. All records withour locatoin go into draft iteams and can be updated anytime.

## Private/Public records
Private records are visible by the team only. 
If you switch to Public, the record become visible in the Public records listing to all users in the server. The details of the record are visible but the location remains hidden. 
Users from other teams can contact you if they are interested in your record.

::: tip
Your records are automatically set as private. You can switch to public when you enter a new record.
To give access to only selected users, use the [*Permissions*](#add-permission-to-other-users) option instead
:::

## Pick location for the record
* Option 1 - location is a box: select the spots to store your record(s) (number of spots will correspond to the quantity). For each sport you can add a volume (optional)
* Option 2 - location is not a box: enter the quantity of your records
* Option 3 - location is currently unknown: do not fill the location and click Save as draft button at the bottom of the page. Edit the location later in the overview of the record.
  
## Add attachment(s)
You can attach document(s) in several formats (pdf, xlsx, docx, pptx, images…)
When you add or edit a record attach the documents in the panel *Extras*.

::: tip
Drag and drop into the box to attach your document.
:::

## Save as draft
If you don’t know the location of your record yet, don’t fill the location panel and click Save as draft button.

View the draft records in the Inventory listing by using the filter on the top.

Edit the location from the overview of the record:
1. Click View button on the right of the item
2. Select Add stock in the Locations panel
3. [Add location](#pick-location-for-the-record) and save 


## Required fields
If required parameters are not filled, the button Add remains disabled. [Required parameters](/laboratory-information-management-system/dashboard/parameters-management.html#required-parameters) can be set from the <mark>Dashboard</mark>.

::: tip
Required parameters appear in teal in the excel template for bulk import.
:::

## Receive record from other team
When you received records transferred from another team, a notification appears in the Team page
All the records received are listed:
1. Click Recover button to add the record into your inventory.
2. Select the Inventory where you want to store the received record.
3. Select the parameters to allocate for the details of the record. In case the parameter does not exist in your workspace you can choose to clone the parameter.
4. Choose the location of the record.

::: warning
Only the quantity received can be stored, you will get a error message if you are trying to store more.
:::
