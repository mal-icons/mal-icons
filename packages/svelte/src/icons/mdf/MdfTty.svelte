<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 4h2v2h-2V4zm-1 3h2v2h-2V7zm-2-3h2v2h-2V4zm7 5h-2V7h2v2zm1-3h-2V4h2v2zm2 3h-2V7h2v2zm1-3h-2V4h2v2zm-7.38 8.38L12.1 16.9c-2.5-1.43-4.57-3.5-6-6l2.52-2.52c0.24-0.240.34-0.580.28-0.9L8.16 3.8c-0.09-0.46-0.5-0.8-0.98-0.8H3.03c-0.56 0-1.030.47-1 1.030.17 2.89 1.02 5.6 2.4 7.97 1.58 2.73 3.85 4.99 6.57 6.57 2.37 1.37 5.08 2.23 7.97 2.40.560.03 1.03-0.44 1.03-1v-4.15c0-0.48-0.34-0.89-0.8-0.98l-3.67-0.73a0.990.99 0 0 0-0.910.27zM14 10h2v2h-2v-2zm-3 0h2v2h-2v-2zm8 2h-2v-2h2v2zm3 0h-2v-2h2v2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
