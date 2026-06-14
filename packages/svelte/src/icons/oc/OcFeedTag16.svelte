<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7.22 6.5a0.720.72 0 1 1-1.44 0 0.720.72 0 0 1 1.44 0Z"}],["path",{"d":"M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16ZM4 5v3.38c00.40.160.780.44 1.06l3.21 3.21a1.2 1.2 0 0 0 1.7 0l3.3-3.3a1.2 1.2 0 0 0 0-1.7L9.44 4.44A1.5 1.5 0 0 0 8.38 4H5a1 1 0 0 0-1 1Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
