<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 8v8h-4V8h4m3-3H12v14h10V5zM10 8V5H2v14h9v-9H5V8h5zm-2 5v3H5v-3h3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
