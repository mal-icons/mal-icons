<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 21h15.89c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2H4c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2zm0-2v-5h4v5H4zM14 7v5h-4V7h4zM8 7v5H4V7h4zm2 12v-5h4v5h-4zm6 0v-5h3.89v5H16zm3.89-7H16V7h3.89v5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
