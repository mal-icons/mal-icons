<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17.7 3.29l-4.11 2.49 4.74 2.7v7.08l-6.36 3.54-6.26-3.54v-5.48L1.6 7.96V18l10.22 6 10.59-6V6l-4.71-2.71zm-1.9-0.99L11.81 0 7.67 2.57l4.03 2.22 4.1-2.48z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
