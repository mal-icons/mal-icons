<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 0h1.98c0.140.720.54 1.62 1.24 2.51C12.9 3.39 13.8 4 15 4v2c-1.75 0-3.07-0.81-4-1.83V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
