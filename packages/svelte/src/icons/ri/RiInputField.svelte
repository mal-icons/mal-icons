<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 5H11V19H8V21H16V19H13V5H16V3H8V5ZM2 7C1.45 7 1 7.45 1 8V16C1 16.55 1.45 17 2 17H8V15H3V9H8V7H2ZM16 9H21V15H16V17H22C22.55 17 23 16.55 23 16V8C23 7.45 22.55 7 22 7H16V9Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
