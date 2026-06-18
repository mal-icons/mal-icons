<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5.25 0A5.24 5.24 0 0 0 0 5.25v13.5A5.24 5.24 0 0 0 5.25 24h13.5A5.24 5.24 0 0 0 24 18.75V5.25A5.24 5.24 0 0 0 18.75 0H5.25zm-0.04 5.1h9.48c1.75 0 2.630.91 2.63 2.75v8.35h1.48v2.69h-4.67V8.58c0-0.51-0.3-0.78-0.89-0.78H9.87v11.1H6.68V7.8H5.21V5.1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
