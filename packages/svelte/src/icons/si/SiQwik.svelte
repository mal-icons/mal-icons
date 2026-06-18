<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7.55 0a2.96 2.96 0 0 0-2.56 1.48L0.53 9.19a2.96 2.96 0 0 0 0 2.96l4.45 7.71A2.96 2.96 0 0 0 7.55 21.34H12l8.59 2.65c0.240.070.45-0.180.34-0.4l-1.92-3.72 4.45-7.71a2.96 2.96 0 0 0 0-2.96l-4.45-7.71A2.96 2.96 0 0 0 16.45 0zm0 0.77L17.73 10.67l-1.9 1.90.58 7.53L6.27 10.67l2.37-2.37z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
