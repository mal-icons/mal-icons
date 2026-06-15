<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.36 15.53L8.95 16.94L4 11.99L8.95 7.04L10.36 8.46L7.86 10.96H16C18.21 10.96 20 12.75 20 14.96V16.96H18V14.96C18 13.85 17.11 12.96 16 12.96H7.79L10.36 15.53Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
