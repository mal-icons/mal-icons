<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 2H6V4H18V2ZM16.95 9.45L12 4.5L7.05 9.45L11 9.45V14.55L7.05 14.55L12 19.5L16.95 14.55L13 14.55V9.45L16.95 9.45ZM18 20V22H6V20H18Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
