<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M23 12L15.93 19.07L14.51 17.66L20.17 12L14.51 6.34L15.93 4.93L23 12ZM3.83 12L9.49 17.66L8.07 19.07L1 12L8.07 4.93L9.49 6.34L3.83 12Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
