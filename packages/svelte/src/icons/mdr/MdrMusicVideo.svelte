<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 4H4c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zm0 14H4V6h16v12z"}],["path",{"d":"M10.84 16.98c1.26-0.17 2.16-1.33 2.16-2.6V9h2c0.55 0 1-0.45 1-1s-0.45-1-1-1h-2c-0.55 0-1 0.45-1 1v4.51c-0.46-0.35-1.02-0.54-1.66-0.51-1.110.07-2.090.92-2.3 2.02a2.51 2.51 0 0 0 2.8 2.96z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
