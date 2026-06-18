<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 18.39V5.61L5.77 12L16 18.39ZM18 3.8V20.2C18 20.98 17.14 21.46 16.47 21.04L3.36 12.85C2.73 12.46 2.73 11.54 3.36 11.15L16.47 2.96C17.14 2.54 18 3.02 18 3.8Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
