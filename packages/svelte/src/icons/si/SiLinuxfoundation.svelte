<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.8 19.2h9.6V24H0V9.6h4.8v9.6zM0 0v7.2h4.8V4.82h14.4V19.2h-2.4V24H24V0H0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
