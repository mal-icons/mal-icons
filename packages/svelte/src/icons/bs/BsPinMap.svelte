<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M3.1 11.2a0.50.5 0 0 1 0.4-0.2H6a0.50.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a0.50.5 0 0 1 0-1h2.5a0.50.5 0 0 1 0.40.2l3 4a0.50.5 0 0 1-0.40.8H0.5a0.50.5 0 0 1-0.4-0.8z"}],["path",{"fill-rule":"evenodd","d":"M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.97V13.5a0.50.5 0 0 1-1 0V7.97A4 4 0 0 1 4 4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
