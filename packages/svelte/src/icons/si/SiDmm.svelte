<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.530.46H0v23.08h11.55C17.28 23.54 24 20.92 24 12S16.030.46 9.530.46zm0.65 15.07V8.34c1.75 0 4.40.08 4.4 3.58 0 3.58-2.55 3.61-4.4 3.61z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
