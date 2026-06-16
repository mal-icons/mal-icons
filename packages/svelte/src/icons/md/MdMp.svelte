<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 9h-3.5v6H15v-1.5h2c0.55 0 1-0.45 1-1V10c0-0.55-0.45-1-1-1zm-0.5 3H15v-1.5h1.5V12zm-5-3H7c-0.55 0-1 0.45-1 1v5h1.5v-4.5h1v3H10v-3h1V15h1.5v-5c0-0.55-0.45-1-1-1z"}],["path",{"d":"M19 3H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zM5 19V5h14v14H5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
