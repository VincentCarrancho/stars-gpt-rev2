import { currentUser } from "@clerk/nextjs/server";
import React from "react";

async function ConversationDashboard() {
  const user = await currentUser();

  if (!user) return <div>Not signed in</div>;

  return <div>Hello {user?.firstName}</div>;
}

export default ConversationDashboard;
