<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20.73 0 16.49 24h-4.58l1.87-10.53-4.74 3.89L7.86 24H3.27L7.51 0h4.58L9.81 13.01l4.73-3.86L16.15 0h4.58z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
