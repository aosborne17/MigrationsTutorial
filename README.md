This application is a simple e-commerce store where the technicality of the backend will increase overtime

### Trello board for contribution

### ERD MYSQL diagram to display our schema

Step 1 -> Deciding what database models we will need

Step 2 -> Creating our first migration file to initialise our database schema

Step 3 -> Creating a seed file to initially populate our database with all our products and other initial information

Keep a diagram and notes folder which explains why each decision is taken, also explaining the pros and cons
Before coding out the logic, write out exactly what will be happening first

complex features will be added such as:

- If an item is out of stock in the warehouse, we can check incoming batch shipments, if the order is being shipped in then do not display as OOS
-

- Create an empty migrations folder

```
npx sequelize migration:create --name {migration-name}
```

- Create an empty seeding folder

```
npx sequelize-cli seed:generate --name {seed-name}
```
