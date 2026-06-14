<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.41 10.66c-0.78-0.78-2.05-0.78-2.83 0l-1.59 1.59v-7.24c0-1.1-0.9-2-2-2-1.1 0-2 0.9-2 2v7.24l-1.59-1.59c-0.78-0.78-2.05-0.78-2.83 0s-0.78 2.05 0 2.83l6.41 6.41 6.41-6.41c0.78-0.780.78-2.05 0-2.83z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
