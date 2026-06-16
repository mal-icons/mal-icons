<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 3a9 9 0 1 0 0 18A9 9 0 0 0 9 3zm2.79 13.21L8 12.41V7h2v4.59l3.21 3.21-1.42 1.41z"}],["path",{"d":"M17.99 3.52v2.16A6.99 6.99 0 0 1 22 12c0 2.79-1.64 5.2-4.01 6.32v2.16C21.48 19.24 24 15.91 24 12s-2.52-7.24-6.01-8.48z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
