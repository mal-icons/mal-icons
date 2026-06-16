<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 9.61V7h4V3h-6v4.61zM4.41 2.86 3 4.27l9 9v0.28c-0.94-0.54-2.1-0.75-3.33-0.32-1.340.48-2.37 1.67-2.61 3.07a4.01 4.01 0 0 0 4.59 4.65c1.96-0.31 3.35-2.11 3.35-4.1v-1.58L19.73 21l1.41-1.41L12 10.44 4.41 2.86z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
