<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 9H21C21.56 9 22 9.45 22 10V20C22 20.55 21.56 21 21 21H3C2.45 21 2 20.55 2 20V9ZM3 3H18V7H2V4C2 3.45 2.45 3 3 3ZM15 14V16H18V14H15Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
