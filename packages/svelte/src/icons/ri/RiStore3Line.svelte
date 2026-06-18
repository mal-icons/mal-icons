<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 13V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V13H2V11L3 6H21L22 11V13H21ZM5 13V19H19V13H5ZM4.04 11H19.96L19.36 8H4.64L4.04 11ZM6 14H14V17H6V14ZM3 3H21V5H3V3Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
