<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 5.5V3.99C2 3.44 2.46 3 2.99 3H21.01C21.56 3 22 3.44 22 3.99V20.01C22 20.56 21.54 21 21.01 21H2.99C2.44 21 2 20.56 2 20.01V19H20V7.3L12 14.5L2 5.5ZM0 10H5V12H0V10ZM0 15H8V17H0V15Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
