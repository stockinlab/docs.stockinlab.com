# Add record

## Add new record
::: tip
Before you start adding records, make sure your workspace is ready. You may need to create additional [parameters](/laboratory-information-management-system/dashboard-parameters.html#create-parameter) and [locations](/laboratory-information-management-system/dashboard-locations.html#create-location) in the `Dashboard`. Access to the `Dashboard` is restricted to the [administrator](/laboratory-information-management-system/dashboard-users-management.html#users-management)).
:::

Creation of categories is not mandatory. However, when you add a new record you have to assign a category and/or a name.

To add new record(s):
1. From your `Groupe page` select the `Inventory` where you want to add the record(s).

::: tip
the button `Add` is also available directly from the `Group page`. If you click it from this page, you will be prompted to select in which inventory you want to add th new record(s).
:::
2. Select (add icon) on top right of the page.
3. Two options are available:
    - `Simple add` if you want to add on or several records with the same parameters.
    - `Add with import` if you want to add a bulk of records with different parameters. This [procedure](/laboratory-information-management-system/add-record.html#use-an-excel-file-to-import-records) require to fill an Excel file.  
The following steps refer to `Simple add`.   
4. Set your record as [public or private](/laboratory-information-management-system/add-record.html#private-public-records). 
5. Fill all the [mandatory parameters](/laboratory-information-management-system/dashboard-parameters.html#mandatory-parameters) (if any). Additional parameters you might want to enter for this record can be selected from the left panel.
6. Enter the location. If the location is a box you need to select the spot(s). If it is not a box, simply add the quantity in the field provided. If you don’t know the location yet, you can save as draft. 
7. [Optional] Add comment and/or attach files in `Extra`.


## Use an Excel file to import records
Use these option if you have a bulk of records to enter into the inventory.
From the `Inventory` page or from any `Listing`, click (add icon) on top right of the page and select `Add with import`:
1. Tick the inventorie(s) in which you need to enter your new records.
2. Click Download template.
3. Open the file: one sheet per inventory is created.
4. Fill all the fields (the location cannot be enter in the file, you have to allocate after the import). The mandatory parameters appear in red.

::: warning
Make sure you enter the good value for the parameter set as “Select” in your workspace. To make the process easier, the ID of the options are referenced in a separate sheet. If your parameter is a “Select” type just enter the ID of the option (and note the name of the option).
:::

When your file is ready, go back to `Add with import`, select the file to import in `Choose file` and click `Import`.

::: warning
In case of error, the details of the error appear. It can be a missing mandatory field, an record with the exact same details (you can force to add), a blank line...
:::

Select the location for each new imported record.
All imported records without location go into [Draft records](/laboratory-information-management-system/search-record.html#draft-records) in your `Listing`. You can still edit their location later:
1. Click (loupe icon).
2. Select (edit location icon).
3. Choose the location of your record and save.

## Private/Public records
Private records can be seen by your team only. If you switch for Public, your records are visible in the Public records listing (Global inventory/Public) by all the teams. The details of the record are visible for all but the location remains hidden. Users from other teams can contact you if they are interested in your record.

::: tip
Your records are automatically set as private. You can switch to public when you enter a new record in the menu `Simple add`: Switch the button from private to public under `Status`.
:::

## Pick location of the record
When you add a new record from the menu `Simple add` Simply select the location in the `Locations` panel.
* If your records are stored in a box, select the spot(s) where your record are located.
* If it is not a box, simply add the quantity in the field provided.
* If you records are in multiple locations, select the additional location(s) from the dropdown menu.
* If you don’t know the location yet, you can [save as draft](/laboratory-information-management-system/search-record.html#draft-records).

When you add records from the menu `Add with import`, the locations are allocated after the import on the same principle.

## Add attachment(s)
You can attach document(s) in several formats (pdf, xlsx, docx, pptx, images…)
When you add a new record from the menu `Simple add`, attach the documents in the panel `Extras`. Click into the box to find into your computer the documents to attach.

::: tip
You can also simply drag and drop into the box to attach your document.
:::

Other documents can be attached later to your record by clicking (attachement record icon) into the overview (view icon) of the record.

## Save as draft
In the case you don’t know the location of your record yet, don’t fill the location panel and click Save as draft.
Draft records can be found in the `Listing` : tick `Draft records` on the top.

To edit the location of your record:
1. Click (loupe icon) to access the overview of the record.
2. Select (edit location icon) on the left.
3. Edit the location and save
You record will be automatically transferred from the Draft records to the Listing.

## Mandatory fields
If mandatory parameters are not filled, the button Add remains disabled. [Mandatory parameters](/laboratory-information-management-system/dashboard-parameters.html#mandatory-parameters) can be set from the `Dashboard`.

::: tip
When you add a new record from the menu `Simple add`, you can add more optional parameters directly from the panel `Parameters`
1. Select the parameters in the list (use the search bar to find easily the parameters).
2. Enter the value for the optional parameters.
:::

When you add records from the menu `Add with import`, the mandatory parameters appear in red in the table.

## Receive record from another group
When you received records transferred from another group, a notification appears into the left panel of your `Group homepage`.
All the records received are listed:
1. Click `Recover` to add the record into your inventory.
2. Select the Inventory where you want to store the received record.
3. Select the parameters to allocate for the details of the record. In case the parameter does not exist in your workspace you can choose to clone the parameter.
4. Choose the location of the record.

::: warning
Only the quantity received can be stored, you will get a error message if you are trying to store more.
:::
