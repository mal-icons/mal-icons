<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 6H4v12.01h16V11h-5z","opacity":".3"}],["path",{"d":"M4 4c-1.1 0-2 0.9-2 2v12.01c0 1.10.9 1.99 2 1.99h16c1.1 0 2-0.9 2-2v-8l-6-6H4zm16 14.01H4V6h11v5h5v7.01z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
