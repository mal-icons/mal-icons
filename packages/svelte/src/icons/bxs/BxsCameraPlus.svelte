<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 5h-2.59l-2.71-2.71A11 0 0 0 14 2h-4a11 0 0 0-0.710.29L6.59 5H4c-1.1 0-2 0.9-2 2v11c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V7c0-1.1-0.9-2-2-2zm-8 12c-2.71 0-5-2.29-5-5 0-2.71 2.29-5 5-5s5 2.29 5 5c0 2.71-2.29 5-5 5z"}],["path",{"d":"M13 9h-2v2H9v2h2v2h2v-2h2v-2h-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
