<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.45 21.83a1 1 0 0 0 1.11 0l9-6A11 0 0 0 21.8 14.4l-9-12c-0.38-0.5-1.22-0.5-1.6 0l-9 12a1 1 0 0 0 0.25 1.43l9 6zm8.12-7.08L12 19.8V4.67l7.57 10.09z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
