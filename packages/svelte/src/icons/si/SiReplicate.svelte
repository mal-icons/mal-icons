<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M24 10.26v2.71h-9.52V24h-3.03V10.26zm0-5.13v2.72H8.76V24H5.72V5.13zM24 0v2.72H3.03V24H0V0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
