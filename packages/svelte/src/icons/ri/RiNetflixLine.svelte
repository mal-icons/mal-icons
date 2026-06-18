<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15.99 17.21L16 2H18V22C17.32 21.73 16.65 21.57 15.98 21.5L8 6.3V21.5C7.33 21.57 6.67 21.73 6 22V2H8L15.99 17.21Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
