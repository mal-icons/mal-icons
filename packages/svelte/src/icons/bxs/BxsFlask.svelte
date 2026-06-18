<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 9.78V4h1V2H8v2h1v5.78l-4.27 9.39a1.99 1.99 0 0 0 0.14 1.91A1.99 1.99 0 0 0 6.55 22h10.9a1.99 1.99 0 0 0 1.68-0.92c0.37-0.570.42-1.290.14-1.91L15 9.78zm-4.090.63c0.06-0.130.09-0.270.09-0.41V4h2v6c0 0.140.030.280.090.41L15.18 15H8.82l2.09-4.59z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
