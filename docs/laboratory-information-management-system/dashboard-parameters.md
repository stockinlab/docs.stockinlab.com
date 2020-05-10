# Parameters

## Create parameter
Under the `Dashboard` menu:
Select  `Parameters`.
Check the list of [Global parameters](#global-parameters) (which are listed below your group parameters) before adding a parameter. The new parameter(s) created apply only to your group.  

If you want to add a new parameter for your group:
1. Click `Add` on top right.  
2. Enter the `Name` of your new parameter and add a description (optional)
3. Select the `Type` of your parameters among the list provided.
4. Allocate the parameter to one or several inventory(ies).

## Edit parameter
From `Parameters`, you can edit or delete a parameter by clicking (action icon) on the right.  
Select (pen icon) to edit the parameter. Select (trash icon) to delete the parameter. 

::: danger
If the parameter is already filled for one item it is impossible to delete it.
:::

## Global parameters
`Global parameters` are created by the super-administrator of your server and are common to every group. Global parameters are useful to search into [Public items](./items.md#search-into-public-items). 

## Expiry date parameter
If you want your parameter to be an expiry date, select `Expiry date` under `Type` when you create the parameter.  
When you add an item into the inventory, specify the day of expiry. You will get a notification when the date of this item is expired.  
Check the expired items by using the [filter](./items.md#filters) `Expired` in `Listing`.

## Mandatory parameters
Mandatory parameters can only be associated to a [Category](#create-category). 
1. If not existing, [create the parameter](#create-parameter)
2. During the creation of a new category, select the parameters that you want to be mandatory to fill in the field `Mandatory parameter`. If the category is already existing, simply [edit the category](#edit-category) to add the mandatory parameters.
