<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m11.17 8-2-2H4v12h16V8h-8.83zM15 9l1.19 2.79 3.030.26-2.3 1.990.69 2.96L15 15.47 12.39 17l0.69-2.96-2.3-1.99 3.03-0.26L15 9z","opacity":".3"}],["path",{"d":"M20 6h-8l-2-2H4c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V8c0-1.1-0.9-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-6.92-3.96L12.39 17 15 15.47 17.61 17l-0.69-2.96 2.3-1.99-3.03-0.26L15 9l-1.19 2.79-3.030.26z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
