# GraphQL Project with TypeScript and NestJS

This project is a GraphQL-based application implemented using TypeScript and NestJS. It provides a set of APIs to manage various entities such as posts, users, tags, sliders, FAQs, menu positions, menu items, categories, and their relationships.

## Entity Schema

The project consists of the following entities and their corresponding attributes:

- Posts (id, title, slug, content, fullcontent, createdAt, updatedAt, author)
- Users (id, username, hashedPassword, email, firstName, lastName, name, role_id)
- User Permissions (user_id, key, value=0 or 1)
  - post-edit
  - post-insert
  - post-delete
  - tag-edit
  - tag-insert
  - tag-delete
  - faq-insert
  - faq-delete
  - faq-edit
  - menu_positions-insert
  - menu_positions-delete
  - menu_positions-edit
  - menu_items-insert
  - menu_items-delete
  - menu_items-edit
  - slider-insert
  - slider-delete
  - slider-edit
- Slider Positions (id, name, slug)
- Slider Slides (id, slider_position_id, image, title, description, link)
- Tags (id, text)
- Post Tags (id, post_id, tag_id)
- Contact Us (id, firstName, lastName, email, tel, text)
- FAQs (id, question, answer)
- Menu Positions (id, name, slug)
- Menu Items (id, menu_position_id, name, link, parent_id=null)
- Categories (id, name, slug, parent_id=null)
- Post Categories (id, post_id, category_id)

## Installation

To run this GraphQL project locally, follow the instructions below:

Clone the repository:

```bash
git clone https://github.com/BaseMax/GeneralCMSGraphQLTS.git
```

Navigate to the project directory:

```bash
cd project-directory
```

Install the dependencies:

```bash
npm install
```

Set up the environment variables:

Create a .env file in the project root.
Define the required environment variables (e.g., database connection details, API keys, etc.) in the .env file.
Start the application:

```bash
npm run start
```

The application should now be running locally on the specified port.

## GraphQL API

Once the application is running, you can interact with the GraphQL API using a GraphQL client or a tool like GraphiQL or GraphQL Playground. The GraphQL endpoint will be available at http://localhost:<port>/graphql.

The API provides various queries and mutations to perform CRUD operations on the entities mentioned above. You can explore the available queries and mutations by accessing the GraphQL endpoint and referring to the provided documentation or schema.

## Contributing

If you want to contribute to this project, you can follow the steps below:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make the necessary changes.
- Commit and push your changes to the branch.
- Submit a pull request, explaining the changes you made and their purpose.
- Please make sure to follow the existing coding style and include appropriate tests for your changes.

## License

This project is licensed under the GPL-3.0 License. Feel free to modify and distribute it as needed.

Copyright 2023, Max Base
