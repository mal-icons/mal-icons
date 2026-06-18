<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 20H19V22H5V20ZM12 18C7.58 18 4 14.42 4 10C4 5.58 7.58 2 12 2C16.42 2 20 5.58 20 10C20 14.42 16.42 18 12 18Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
