<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 21h-1l1-7H7.5c-0.88 0-0.33-0.75-0.31-0.78C8.48 10.94 10.42 7.54 13.01 3h1l-1 7h3.51c0.4 0 0.620.190.40.66C12.97 17.55 11 21 11 21z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
