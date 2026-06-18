<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m14.47 13.77-1.41-1.42 5.66-5.65-1.42-1.42-5.65 5.66-1.42-1.41 5.66-5.66-1.42-1.42-6.36 6.37a3 3 0 0 0 0 4.24l0.710.71-6.37 6.36 1.42 1.42 6.36-6.370.710.71a3 3 0 0 0 4.24 0l6.37-6.36-1.42-1.42z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
