import { NextResponse, NextRequest } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const { noSCItems, userId } = await body.json();

    await clerkClient.users.updateUserMetadata(userId, {
        publicMetadata: {
          noSCItems
        }
      })
      return NextResponse.json({ success: true });
}