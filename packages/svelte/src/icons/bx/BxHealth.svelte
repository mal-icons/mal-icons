<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19.65 5.29 14 8.55V2.03h-4v6.52L4.35 5.29l-2 3.47 5.65 3.26-5.65 3.26 2 3.47L10 15.48V22h4v-6.52l5.65 3.26 2-3.46-5.65-3.26 5.65-3.26z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
