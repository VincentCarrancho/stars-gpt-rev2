import { NextResponse, NextRequest } from "next/server";
import { getXataClient, DatabaseSchema } from "../../../xata";
import { Kysely } from "kysely";
import { XataDialect, Model } from "@xata.io/kysely";

const xata = getXataClient();

const db = new Kysely<Model<DatabaseSchema>>({
  dialect: new XataDialect({ xata }),
});

export async function GET() {
  const record = await db
    .selectFrom("tests")
    .select(["tests.text", "id"])
    .execute();
  return NextResponse.json({ record });
}
