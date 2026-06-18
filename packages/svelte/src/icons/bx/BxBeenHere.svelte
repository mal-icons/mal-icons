<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 2C7.59 2 4 5.59 4 9.99c-0.03 6.45 7.12 11.6 7.42 11.82a11 0 0 0 1.16 0C12.88 21.6 20.03 16.44 20 10c0-4.41-3.59-8-8-8zm0 17.74C10.39 18.43 5.98 14.44 6 10c0-3.31 2.69-6 6-6s6 2.69 6 6.01c0.02 4.44-4.39 8.42-6 9.73z"}],["path",{"d":"M11 11.59 8.71 9.29l-1.41 1.41L11 14.41l5.71-5.71-1.41-1.41z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
