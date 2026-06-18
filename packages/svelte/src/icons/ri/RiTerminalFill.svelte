<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 12L3.93 19.07L2.51 17.66L8.17 12L2.51 6.34L3.93 4.93L11 12ZM11 19H21V21H11V19Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
