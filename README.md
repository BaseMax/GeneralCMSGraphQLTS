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
cd GeneralCMSGraphQLTS
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

## GraphQL

### Queries

- `getAllPosts`: Retrieves a list of all posts.
- `getPostById(id: ID!)`: Retrieves a specific post by its ID.
- `getAllUsers`: Retrieves a list of all users.
- `getUserById(id: ID!)`: Retrieves a specific user by their ID.
- `getAllTags`: Retrieves a list of all tags.
- `getTagById(id: ID!)`: Retrieves a specific tag by its ID.
- `getAllSliderPositions`: Retrieves a list of all slider positions.
- `getSliderPositionById(id: ID!)`: Retrieves a specific slider position by its ID.
- `getAllSliderSlides`: Retrieves a list of all slider slides.
- `getSliderSlideById(id: ID!)`: Retrieves a specific slider slide by its ID.
- `getAllFAQs`: Retrieves a list of all FAQs.
- `getFAQById(id: ID!)`: Retrieves a specific FAQ by its ID.
- `getAllMenuPositions`: Retrieves a list of all menu positions.
- `getMenuPositionById(id: ID!)`: Retrieves a specific menu position by its ID.
- `getAllMenuItems`: Retrieves a list of all menu items.
- `getMenuItemById(id: ID!)`: Retrieves a specific menu item by its ID.
- `getAllCategories`: Retrieves a list of all categories.
- `getCategoryById(id: ID!)`: Retrieves a specific category by its ID.

### Mutations

- `createPost(input: CreatePostInput!):` Post: Creates a new post.
- `updatePost(id: ID!, input: UpdatePostInput!):` Post: Updates an existing post.
- `deletePost(id: ID!):` ID: Deletes a post by its ID.
- `createUser(input: CreateUserInput!):` User: Creates a new user.
- `updateUser(id: ID!, input: UpdateUserInput!):` User: Updates an existing user.
- `deleteUser(id: ID!):` ID: Deletes a user by their ID.
- `createTag(input: CreateTagInput!):` Tag: Creates a new tag.
- `updateTag(id: ID!, input: UpdateTagInput!):` Tag: Updates an existing tag.
- `deleteTag(id: ID!):` ID: Deletes a tag by its ID.
- `createSliderPosition(input: CreateSliderPositionInput!):` SliderPosition: Creates a new slider position.
- `updateSliderPosition(id: ID!, input: UpdateSliderPositionInput!):` SliderPosition: Updates an existing slider position.
- `deleteSliderPosition(id: ID!):` ID: Deletes a slider position by its ID.
- `createSliderSlide(input: CreateSliderSlideInput!):` SliderSlide: Creates a new slider slide.
- `updateSliderSlide(id: ID!, input: UpdateSliderSlideInput!):` SliderSlide: Updates an existing slider slide.
- `deleteSliderSlide(id: ID!):` ID: Deletes a slider slide by its ID.
- `createFAQ(input: CreateFAQInput!):` FAQ: Creates a new FAQ.
- `updateFAQ(id: ID!, input: UpdateFAQInput!):` FAQ: Updates an existing FAQ.
- `deleteFAQ(id: ID!):` ID: Deletes an FAQ by its ID.
- `createMenuPosition(input: CreateMenuPositionInput!):` MenuPosition: Creates a new menu position.
- `updateMenuPosition(id: ID!, input: UpdateMenuPositionInput!):` MenuPosition: Updates an existing menu position.
- `deleteMenuPosition(id: ID!):` ID: Deletes a menu position by its ID.
- `createMenuItem(input: CreateMenuItemInput!): MenuItem: Creates a new menu item.
- `updateMenuItem(id: ID!, input: UpdateMenuItemInput!):` MenuItem: Updates an existing menu item.
- `deleteMenuItem(id: ID!):` ID: Deletes a menu item by its ID.
- `createCategory(input: CreateCategoryInput!):` Category: Creates a new category.
- `updateCategory(id: ID!, input: UpdateCategoryInput!):` Category: Updates an existing category.
- `deleteCategory(id: ID!):` ID: Deletes a category by its ID.

Note: The input and output types mentioned in the above queries and mutations are placeholders and may vary based on your specific implementation. Please refer to the project's GraphQL schema for accurate types and field definitions.

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
