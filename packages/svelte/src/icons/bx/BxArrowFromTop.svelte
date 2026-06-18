<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 4h12v2H6zm6 16.41 6.71-6.71-1.41-1.41L13 16.59V8h-2v8.59l-4.29-4.29-1.41 1.41z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
