<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M23 13v-2h-2.06A8.99 8.99 0 0 0 13 3.06V1h-2v2.06c-0.980.11-1.910.38-2.770.78l1.53 1.53a7 7 0 0 1 8.87 8.87l1.53 1.53c0.4-0.860.67-1.790.78-2.77H23zM4.41 2.86 3 4.27l2.04 2.04A8.99 8.99 0 0 0 3.06 11H1v2h2.06A8.99 8.99 0 0 0 11 20.94V23h2v-2.06c1.77-0.2 3.38-0.91 4.69-1.98L19.73 21l1.41-1.41L4.41 2.86zM12 19A7 7 0 0 1 6.46 7.73l9.81 9.81A6.97 6.97 0 0 1 12 19z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
