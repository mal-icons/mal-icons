<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5.45 15L1 18.5V3C1 2.45 1.45 2 2 2H17C17.55 2 18 2.45 18 3V15H5.45ZM4.76 13H16V4H3V14.39L4.76 13ZM8 17H18.24L20 18.39V8H21C21.55 8 22 8.45 22 9V22.5L17.55 19H9C8.45 19 8 18.55 8 18V17Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
