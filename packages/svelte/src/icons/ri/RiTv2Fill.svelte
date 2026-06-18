<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 4C2 3.45 2.46 3 2.99 3H21.01C21.56 3 22 3.44 22 4V18C22 18.55 21.54 19 21.01 19H2.99C2.44 19 2 18.56 2 18V4ZM5 20H19V22H5V20Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
