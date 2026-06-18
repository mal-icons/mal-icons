<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 6.9a11 0 0 0-0.55-0.8l-7.97-4a11 0 0 0-0.890l-8.03 4c-0.30.15-0.50.44-0.540.77-0.010.1-1.14 9.74 8.54 15.01a11 0 0 0 0.97-0.01c9.31-5.26 8.51-14.57 8.48-14.97zm-8.98 12.94c-6.86-4.01-7.14-10.35-7.06-12.2l7.07-3.52 7 3.51c0.01 1.87-0.48 8.24-7.01 12.22z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
