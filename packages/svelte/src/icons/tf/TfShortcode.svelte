<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0.03 1h3v1h-2v13h2v1h-3v-15zM14.03 1v1h2v13h-2v1h3v-15h-3zM8.91 7.97c-1.11-0.43-1.61-0.8-1.61-1.56 0-0.55 0.42-1.21 1.52-1.21 0.73 0 1.27 0.24 1.54 0.38l0.29-0.85c-0.36-0.2-0.96-0.4-1.79-0.4-1.57 0-2.61 0.94-2.61 2.19 0 1.14 0.82 1.82 2.13 2.29 1.09 0.42 1.52 0.85 1.52 1.61 0 0.82-0.62 1.38-1.69 1.38-0.72 0-1.4-0.24-1.87-0.53l-0.26 0.88c0.43 0.29 1.28 0.52 2.06 0.52 1.91 0 2.83-1.08 2.83-2.33 0-1.19-0.7-1.85-2.06-2.37z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
