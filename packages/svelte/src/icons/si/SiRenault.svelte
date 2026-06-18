<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17.46 11.99l-4.1-7.69-0.92 1.71 3.21 5.99-5.48 10.28L4.69 11.99 11.1 0H9.27L2.88 11.99 9.27 24h1.81zm3.66 0L14.71 0h-1.81L6.52 11.99l4.12 7.710.9-1.71-3.19-6 5.46-10.26L19.29 11.99 12.9 24h1.81Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
