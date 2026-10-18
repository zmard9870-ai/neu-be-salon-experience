import { describe, expect, it } from "vitest";
import { bookingSchema } from "@/lib/booking";

const base = { name: "Asha", service: "Hair Styling", date: "2026-10-20", time: "11:00" };

describe("booking mobile validation", () => {
  it("accepts a 10-digit Indian mobile", () => {
    expect(bookingSchema.safeParse({ ...base, phone: "98765 43210" }).success).toBe(true);
  });
  it("rejects a short number", () => {
    expect(bookingSchema.safeParse({ ...base, phone: "12345" }).success).toBe(false);
  });
});
