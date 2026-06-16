<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m3 2 2.01 18.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-0.77 1.99-1.77L21 2H3zm14 18-10 0.01L5.89 10H18.1L17 20zm1.33-12H5.67l-0.44-4h13.53l-0.43 4zM12 19c1.66 0 3-1.34 3-3 0-2-3-5.4-3-5.4S9 14 9 16c0 1.66 1.34 3 3 3zm0-5.09c0.590.91 1 1.73 1 2.09 0 0.55-0.45 1-1 1s-1-0.45-1-1c0-0.370.41-1.19 1-2.09z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
