<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 10V7c0-1.1-0.9-2-2-2H6c-1.1 0-2 0.9-2 2v3c-1.1 0-2 0.9-2 2v5h1.33L4 19h1l0.67-2h12.67l0.66 2h1l0.67-2H22v-5c0-1.1-0.9-2-2-2zm-9 0H6V7h5v3zm7 0h-5V7h5v3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
