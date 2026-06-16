<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m381-242 453-453-43-43-410 410-211-211-43 43 254 254Zm0 85L42-496l128-128 211 211 410-410 128 128-538 538Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
