"use client";
import Loader from "@/components/Loader";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LiveblocksProvider
      publicApiKey={
        "pk_dev_xUp5myyRxKi5SlGl-vI8ttpw8ehO1zZlV9JIKkH9Z8peQj_UppyQzDoo_yReBgfv"
      }
    >
      <ClientSideSuspense fallback={<Loader />}>{children}</ClientSideSuspense>
    </LiveblocksProvider>
  );
};

export default Provider;
