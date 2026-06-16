<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 9.58c-2.95 0-5.47 1.83-6.5 4.41h13A7 7 0 0 0 12 9.58z","opacity":".3"}],["path",{"d":"M2 17h20v2H2zm11.84-9.21A2.01 2.01 0 0 0 12 5a2.01 2.01 0 0 0-1.84 2.79C6.25 8.6 3.27 11.93 3 16h18c-0.27-4.07-3.25-7.4-7.16-8.21zM12 9.58c2.95 0 5.47 1.83 6.5 4.41h-13A7 7 0 0 1 12 9.58z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
