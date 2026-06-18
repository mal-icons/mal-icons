<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 22C4.45 22 4 21.55 4 21V3C4 2.45 4.45 2 5 2H19C19.55 2 20 2.45 20 3V21C20 21.55 19.55 22 19 22H5ZM15 16L20 12L15 8V11H9V13H15V16Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
