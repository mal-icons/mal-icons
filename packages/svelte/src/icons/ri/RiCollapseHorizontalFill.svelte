<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13.5 12 18.45 7.05 18.45 11H23V13H18.45L18.45 16.95 13.5 12ZM1 13H5.55L5.55 16.95 10.5 12 5.55 7.05 5.55 11H1V13Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
