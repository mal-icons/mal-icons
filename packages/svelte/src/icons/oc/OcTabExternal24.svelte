<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 5.75C3 4.78 3.78 4 4.75 4h14.5c0.97 0 1.750.78 1.75 1.75V18.5h2a0.750.75 0 0 1 0 1.5h-2.65a0.850.85 0 0 1-0.85-0.85V5.75a0.250.25 0 0 0-0.25-0.25H4.75a0.250.25 0 0 0-0.250.25v13.4c0 0.47-0.380.85-0.850.85H1a0.750.75 0 0 1 0-1.5h2V5.75Z"}],["path",{"d":"M16.4 13.7a0.750.75 0 0 1-1.290.55 689.45 689.45 0 0 0-1.92-1.98l-4.14 4.14a0.750.75 0 0 1-1.06-1.06l4.14-4.14-1.94-1.94A0.750.75 0 0 1 10.7 8h4.95a0.750.75 0 0 1 0.750.75v4.95Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
