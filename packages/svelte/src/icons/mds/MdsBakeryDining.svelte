<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m16.36 7.58-0.86 9.41H17l3.16-7.89zM3.84 9.1 7 16.99h1.5l-0.86-9.41zM10 16.99h4L15 6H9zm10.32-4.24-1.81 4.5 1.950.96 2.06-1.22zM1.48 16.99l2.06 1.22 1.95-0.96-1.81-4.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
