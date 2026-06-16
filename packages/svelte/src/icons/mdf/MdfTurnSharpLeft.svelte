<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 6.83 4.41 8.41 3 7l4-4 4 4-1.41 1.41L8 6.83V13h8c1.1 0 2 0.9 2 2v6h-2v-6H8c-1.1 0-2-0.9-2-2V6.83z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
