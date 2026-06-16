<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m18 6.83 1.59 1.59L21 7l-4-4-4 4 1.41 1.41L16 6.83V13H8c-1.1 0-2 0.9-2 2v6h2v-6h8c1.1 0 2-0.9 2-2V6.83z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
