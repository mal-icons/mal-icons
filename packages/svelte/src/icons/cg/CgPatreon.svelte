<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"opacity":"0.5","d":"M21 10C21 13.31 18.31 16 15 16C11.69 16 9 13.31 9 10C9 6.69 11.69 4 15 4C18.31 4 21 6.69 21 10Z","fill":"currentColor"}],["path",{"d":"M3 4H7V20H3V4Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
