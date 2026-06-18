<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 3V21C21 21.55 20.55 22 20 22H4C3.45 22 3 21.55 3 21V3C3 2.45 3.45 2 4 2H20C20.55 2 21 2.45 21 3ZM5 16V20H19V16H5ZM15 17H17V19H15V17Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
