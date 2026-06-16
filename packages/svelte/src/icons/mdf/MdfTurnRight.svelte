<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m17.17 11-1.59 1.59L17 14l4-4-4-4-1.41 1.41L17.17 9H9c-1.1 0-2 0.9-2 2v9h2v-9h8.17z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
