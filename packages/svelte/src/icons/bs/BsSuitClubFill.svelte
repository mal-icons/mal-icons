<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.5 12.5a3.5 3.5 0 0 1-2.68-1.25 20 20 0 0 0 1.58 2.91c0.230.35-0.020.85-0.440.85H6.04c-0.42 0-0.67-0.5-0.44-0.85a20 20 0 0 0 1.58-2.91 3.5 3.5 0 1 1-2.54-5.74 3.5 3.5 0 1 1 6.71 0A3.5 3.5 0 1 1 11.5 12.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
