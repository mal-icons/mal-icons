<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20.38 20.71 12 0 3.62 20.71 2.29 24h19.42zM12 13.61l-5.73 7.06 1.29-3.18L12 6.51l4.44 10.98 1.29 3.18z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
