<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M480-80q-83 0-141.5-58.5T280-280q0-51 23-96t68-67v-328q0-45.42 31.79-77.21Q434.58-880 480-880t77.21 31.79Q589-816.42 589-771v328q45 22 68 67t23 96q0 83-58.5 141.5T480-80Zm-49-435h98v-53h-49v-39h49v-87h-49v-38.5h49V-771q0-20.82-14.12-34.91-14.12-14.09-35-14.09Q459-820 445-805.91 431-791.82 431-771v256Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
