<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a0.50.5 0 0 1-0.740.44L8 13.07l-5.26 2.87A0.50.5 0 0 1 2 15.5m6.5-11a0.50.5 0 0 0-1 0V6H6a0.50.5 0 0 0 0 1h1.5v1.5a0.50.5 0 0 0 1 0V7H10a0.50.5 0 0 0 0-1H8.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
