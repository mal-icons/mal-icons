<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 18h3v-2H9c-1.65 0-3-1.35-3-3s1.35-3 3-3h6v3l5-4-5-4v3H9c-2.76 0-5 2.24-5 5s2.24 5 5 5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
