<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M480-394Zm-153-51 75 50 78-39 77 40 75-50-47-96H374l-47 95ZM177-140h606L659-390l-97 65-82-41-82 40-98-65-123 251ZM80-80l240-487q8-15 22.47-24 14.47-9 31.53-9h76v-280h254l-35 70 35 70H510v140h73q16.93 0 30.92 9T636-567L880-80H80Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
