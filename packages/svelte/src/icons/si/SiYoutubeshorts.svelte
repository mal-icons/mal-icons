<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m18.93 9.99-1.44-0.6 1.72-0.91a4.48 4.48 0 0 0 1.87-6.08 4.51 4.51 0 0 0-6.09-1.87L4.79 5.93a4.5 4.5 0 0 0-2.4 4.19 4.52 4.52 0 0 0 2.67 3.9c0.040.01 1.440.6 1.440.6l-1.710.9a4.51 4.51 0 0 0-2.37 3.97A4.53 4.53 0 0 0 6.93 24c0.73 0 1.44-0.17 2.08-0.51l10.21-5.41a4.49 4.49 0 0 0 2.39-4.19 4.53 4.53 0 0 0-2.68-3.9ZM9.6 15.19V8.82l6.01 3.18z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
