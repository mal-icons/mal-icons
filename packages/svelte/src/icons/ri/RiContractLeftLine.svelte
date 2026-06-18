<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15.07 4.93L16.49 6.34L11.83 11L21 11L21 13L11.83 13L16.49 17.66L15.07 19.07L8 12L15.07 4.93ZM4 19L4 5H6L6 19H4Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
