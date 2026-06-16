<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14.91 6.71a11 0 0 0-1.41 0L8.91 11.3a11 0 0 0 0 1.41l4.59 4.59a11 0 1 0 1.41-1.41L11.03 12l3.88-3.88c0.38-0.390.38-1.03 0-1.41z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
