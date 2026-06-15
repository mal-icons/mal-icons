<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4.65 7.73L0.4 11.96L4.63 16.21L6.05 14.8L4.24 12.98L16.1 13.02L19.36 16.27L23.6 12.03L19.36 7.79L16.13 11.02L4.22 10.98L6.06 9.14L4.65 7.73ZM17.94 12.03L19.36 10.62L20.77 12.03L19.36 13.45L17.94 12.03Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
