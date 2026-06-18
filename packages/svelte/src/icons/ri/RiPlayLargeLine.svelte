<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 18.39V5.61L18.23 12L8 18.39ZM6 3.8V20.2C6 20.98 6.86 21.46 7.53 21.04L20.64 12.85C21.27 12.46 21.27 11.54 20.64 11.15L7.53 2.96C6.86 2.54 6 3.02 6 3.8Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
