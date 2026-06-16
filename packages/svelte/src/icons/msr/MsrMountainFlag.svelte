<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m327-445 75 50 64-32q6-3 13.5-3t13.5 3l64 33 75-50-47-96H374l-47 95ZM177-140h606L659-390l-82 55q-6.6 5.14-14.3 5.57Q555-329 547-333l-67-33-67 33q-8 4-15.5 3.5T383-335l-83-56-123 251Zm-49 60q-17.5 0-26.25-14t-0.75-29l219-444q8-15 22.47-24 14.47-9 31.53-9h76v-250q0-12.75 8.63-21.37T480-880h200q8.13 0 12.57 7 4.43 7 0.44 15l-21 41q-2 3-2 7t2 7l21 41q4 8-0.43 15T680-740H510v140h73q16.93 0 30.92 9T636-567l222 444q8 15-0.75 29T831-80H128Zm352-286Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
