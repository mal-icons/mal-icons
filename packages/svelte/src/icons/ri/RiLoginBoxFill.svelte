<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 11H4V3C4 2.45 4.45 2 5 2H19C19.55 2 20 2.45 20 3V21C20 21.55 19.55 22 19 22H5C4.45 22 4 21.55 4 21V13H10V16L15 12L10 8V11Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
