<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19.07 19.07c3.9-3.9 3.9-10.24 0-14.14-3.9-3.9-10.24-3.9-14.14 0-3.9 3.9-3.9 10.24 0 14.14 3.9 3.9 10.24 3.9 14.14 0zM8.46 8.46l2.83 2.83 3.54-3.54 1.41 1.41-3.53 3.54 2.83 2.83H8.46V8.46z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
