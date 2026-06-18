<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5.33 0h13.33A5.32 5.32 0 0 1 24 5.33v13.33A5.32 5.32 0 0 1 18.67 24H5.33A5.32 5.32 0 0 1 0 18.67V5.33A5.32 5.32 0 0 1 5.33 0Zm10.33 7.67v-3H6.34v3zm0 0v11.67h3V7.67ZM9.5 19.33a4.83 4.83 0 1 0 0-9.67 4.83 4.83 0 0 0 0 9.67z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
