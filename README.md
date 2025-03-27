# 🎭 Playwright Automation Project

## 📥 Getting Started

### 1. Clone the Repository
- Use `git clone` to clone this repository to your local machine.
- Navigate into the project folder using your terminal.

### 2. Install Dependencies
- Make sure you have Node.js installed.
- Run `npm install` to install all project dependencies.
- Run `npx playwright install` to install the required Playwright browsers.

---

## 🧪 API Challenge: CRUD Tests using https://restful-api.dev/

We are using the public RESTful API at [https://restful-api.dev/] to practice creating full CRUD tests.

### Instructions

1. **Use the existing folder structure.**  
   - Place all API tests inside the appropriate folder following the project's structure (e.g., `tests/001-crud-test/` or similar).

2. **Create the following tests:**
   - A **POST** request to create a new object.
   - A **GET** request to retrieve the created object.
   - A **PUT** request to fully update the object.
   - A **PATCH** request to partially update the object.
   - A **DELETE** request to remove the object and confirm it was deleted.

3. **Use Playwright’s `request` context** for all API tests.

4. **Follow the existing naming conventions** for files and functions already established in the project.

5. **Keep the tests independent**, organized, and easy to maintain.

6. **Tag your test files** with appropriate annotations (e.g., `@api`) if the project uses test filtering.


---

## ✅ Notes

- Run your tests using `npx playwright test`.
- Use `--grep` if you want to run only the new API challenge tests.
- If unsure about where to place new files or how to name them, refer to the existing test files for guidance.

---

Happy Testing! 🚀
