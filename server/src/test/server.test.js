const request = require("supertest");
const { server } = require("../app");

it("Error when trying to signin with non existent email", async () => {
  await request(server)
    .get("/api/user")
    .expect(200)
    .then((response) => {
      // Check the response type and length
      expect(Array.isArray(response.body)).toBeTruthy();
      //       expect(response.body.length).toEqual(1);

      // Check the response data
      //       expect(response.body[0]._id).toBe(post.id);
      //       expect(response.body[0].title).toBe(post.title);
      //       expect(response.body[0].content).toBe(post.content);
    });
});
