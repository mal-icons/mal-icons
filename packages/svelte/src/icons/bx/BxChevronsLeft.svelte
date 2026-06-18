<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m12.71 7.71-1.41-1.41L5.59 12l5.71 5.71 1.41-1.41L8.41 12z"}],["path",{"d":"M16.29 6.29 10.59 12l5.71 5.71 1.41-1.41L13.41 12l4.29-4.29z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
