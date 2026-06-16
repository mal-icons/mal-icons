<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M452-644 303-498q-9 9-21 8.5t-21-9.5q-9-9-9-21t9-21l199-199q9-9 21-9t21 9l199 199q9 9 9 21t-9 21q-9 9-21 9t-21-9L512-646v372q0 13-8.5 21.5T482-244q-13 0-21.5-8.5T452-274v-370Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
