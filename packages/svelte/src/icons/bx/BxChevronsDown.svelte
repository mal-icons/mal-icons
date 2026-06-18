<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m12 15.59-4.29-4.29-1.41 1.41L12 18.41l5.71-5.71-1.41-1.41z"}],["path",{"d":"m17.71 7.71-1.41-1.41L12 10.59 7.71 6.29 6.29 7.71 12 13.41z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
