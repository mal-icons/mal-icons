<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M23.1 2.41c0 1.33-1.05 2.41-2.35 2.41s-2.35-1.08-2.35-2.41S19.45 0 20.75 0s2.35 1.08 2.35 2.41zm-11.510.54C5.69 2.950.9 7.850.9 13.89V24h6.58V13.89c0-2.33 1.84-4.21 4.11-4.21s4.11 1.89 4.11 4.21V24h6.58V13.89c0-6.05-4.78-10.95-10.69-10.95z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
