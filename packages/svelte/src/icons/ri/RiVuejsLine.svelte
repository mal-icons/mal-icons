<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3.32 3L12 18L20.69 3H23L12 22L1 3H3.32ZM7.66 3L12 10.5L16.34 3H18.66L12 14.5L5.34 3H7.66Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
