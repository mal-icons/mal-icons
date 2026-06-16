<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 11V2H7v9l4.66 2.8-0.99 2.34-3.410.29 2.59 2.24L9.07 22 12 20.23 14.93 22l-0.78-3.33 2.59-2.24-3.41-0.29-0.99-2.34L17 11zm-4 1.23-1 0.6-1-0.6V3h2v9.23z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
