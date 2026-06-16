<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m190-120-30-30 320-730 320 730-30 30-290-132-290 132Zm68-98 222-98 222 98-222-514-222 514Zm222-98Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
