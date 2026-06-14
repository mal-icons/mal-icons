<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M130.6 447.6h169l43.3 76.2H0l120.4-208.6 50.4-87.4 43.3 75.1zm63-259.3 41.6-72 235.3 407.5h-83.3zm64.7-112.1h83.3L600 523.8h-83.3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
