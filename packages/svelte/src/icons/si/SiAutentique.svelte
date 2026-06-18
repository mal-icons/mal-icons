<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m18.54 1.23-0.27 1.66a10.57 10.57 0 0 0-6.11-2.32L0 11.99h12.16V6.06c3.2 0 5.74 2.43 5.74 5.92 0 3.69-2.61 5.98-5.73 5.98-2.59 0-4.65-1.56-5.43-3.9L0 11.98c0 6.43 4.59 11.45 11.54 11.45 1.67 0 4.26-0.38 6.71-2.33l0.29 1.64H24V1.23Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
