import request from "supertest";
import { app } from "../../index";
import { defineFeature, loadFeature } from "jest-cucumber";
import path from "path";
import { resetDatabase } from "../fixtures/reset";
import {
  Assignment,
  AssignmentBuilder,
  ClassRoomBuilder,
  ClassRoom,
} from "../fixtures";

const feature = loadFeature(
  path.join(__dirname, "../features/retrieve_assignments_for_class.feature")
);

defineFeature(feature, (test) => {
  afterEach(async () => {
    await resetDatabase();
  });

  test("Successfully retrieving assignments for a class room", ({
    given,
    when,
    then,
  }) => {
    let classRoom: ClassRoom;
    let assignments: Assignment[] = [];
    let response: any = {};

    given("I have a class room with assignments", async () => {
      ({ classRoom: classRoom, assignments: assignments } =
        await new ClassRoomBuilder()
          .withAssignments([new AssignmentBuilder(), new AssignmentBuilder()])
          .build());
    });

    when("I request all assignments for this class room", async () => {
      response = await request(app).get(`/classes/${classRoom.id}/assignments`);
    });

    then("I should receive all assignments for that class room", () => {
      expect(response.status).toBe(200);
      expect(response.body.data.length).toBe(assignments.length);
      assignments.forEach((assignment: any) => {
        expect(
          response.body.data.some((a: any) => a.title === assignment.title)
        ).toBeTruthy();
      });
    });
  });

  test("Attempt to retrieve assignments for a non-existent class room", ({
    when,
    then,
  }) => {
    let response: any = {};

    when("I request assignments for a non-existent class room", async () => {
      response = await request(app).get(
        "/classes/aec6817e-66b4-4ce5-8a25-f3ec459e40df/assignments"
      );
    });

    then("I should receive an error", () => {
      expect(response.status).toBe(404);
    });
  });

  test("Attempt to retrieve assignments for an invalid class room", ({
    when,
    then,
  }) => {
    let response: any = {};

    when("I request assignments for an invalid class room", async () => {
      response = await request(app).get("/classes/123/assignments");
    });

    then("I should receive a 400 bad request error", () => {
      expect(response.status).toBe(400);
    });
  });
});
