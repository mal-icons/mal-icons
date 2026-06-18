<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.57 19.68h2.9L21.620.02 18.7 0l-4.43 10.67H9.71L5.3 0H2.38l8.19 19.68zm-7.02 1.85h16.91V24H3.55v-2.47z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
