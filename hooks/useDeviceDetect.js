import { useSyncExternalStore } from "react";
import { deviceStore } from "@/utils/device";

export function useDeviceDetect() {
  const deviceInfo = useSyncExternalStore(
    deviceStore.subscribe,
    deviceStore.getSnapshot,
    deviceStore.getServerSnapshot
  );

  return deviceInfo;
}

export default useDeviceDetect;
