<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 13v-2H7V8l-5 4 5 4v-3z"}],["path",{"d":"M20 3h-9c-1.1 0-2 0.9-2 2v4h2V5h9v14h-9v-4H9v4c0 1.10.9 2 2 2h9c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
