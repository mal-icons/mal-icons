<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 6h2v12h-2zM4 13h8.59l-4.29 4.29 1.41 1.41L16.41 12 9.71 5.29 8.29 6.71 12.59 11H4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
