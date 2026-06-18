<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 6h2v12H4zm4 7h8.59l-4.29 4.29 1.41 1.41L20.41 12l-6.71-6.71-1.41 1.41L16.59 11H8z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
