<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 4H4c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h9v-2H4V8l8 5 8-5v5h2V6c0-1.1-0.9-2-2-2zm-8 7L4 6h16l-8 5zm7 4 4 4-4 4v-3h-4v-2h4v-3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
