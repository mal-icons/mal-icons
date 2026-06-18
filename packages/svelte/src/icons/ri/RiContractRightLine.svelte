<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.17 11L7.51 6.34L8.93 4.93L16 12L8.93 19.07L7.51 17.66L12.17 13L3 13L3 11L12.17 11ZM18 19L18 5H20L20 19H18Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
