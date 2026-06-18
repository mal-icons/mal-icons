<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 3H4c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zM4 19V7h16l0 12H4z"}],["path",{"d":"m15.71 10.71-1.41-1.41L12 11.59 9.71 9.29l-1.41 1.41L10.59 13l-2.29 2.29 1.41 1.41L12 14.41l2.29 2.29 1.41-1.41L13.41 13z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
