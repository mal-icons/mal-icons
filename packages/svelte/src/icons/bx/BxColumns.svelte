<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19.89 3H4c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h15.89c1.1 0 2-0.9 2-2V5a2 2 0 0 0-2-2zM8 19H4V8h4v11zm6 0h-4V8h4v11zm2 0V8h3.89l0 11H16z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
