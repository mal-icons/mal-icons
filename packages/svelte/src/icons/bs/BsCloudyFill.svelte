<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13.41 7.03a5 5 0 0 0-9.5-1A3.5 3.5 0 1 0 3.5 13H13a3 3 0 0 0 0.41-5.97"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
