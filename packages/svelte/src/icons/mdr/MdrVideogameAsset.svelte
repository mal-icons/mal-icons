<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 6H3c-1.1 0-2 0.9-2 2v8c0 1.10.9 2 2 2h18c1.1 0 2-0.9 2-2V8c0-1.1-0.9-2-2-2zm-11 7H8v2c0 0.55-0.45 1-1 1s-1-0.45-1-1v-2H4c-0.55 0-1-0.45-1-1s0.45-1 1-1h2V9c0-0.550.45-1 1-1s1 0.45 1 1v2h2c0.55 0 1 0.45 1 1s-0.45 1-1 1zm5.5 2c-0.83 0-1.5-0.67-1.5-1.5s0.67-1.5 1.5-1.5 1.50.67 1.5 1.5-0.67 1.5-1.5 1.5zm4-3c-0.83 0-1.5-0.67-1.5-1.5S18.67 9 19.5 9s1.50.67 1.5 1.5-0.67 1.5-1.5 1.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
