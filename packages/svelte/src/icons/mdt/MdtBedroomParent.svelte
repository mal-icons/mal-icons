<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 20h16V4H4v16zm1-6.83c0-0.660.25-1.260.65-1.72V9c0-1.10.9-2 2-2H11c0.37 0 0.720.12 1 0.320.28-0.20.63-0.32 1-0.32h3.35c1.1 0 2 0.9 2 2v2.45c0.40.460.65 1.060.65 1.72V17h-1.5v-1.5h-11V17H5v-3.83z","opacity":".3"}],["path",{"d":"M20 2H4c-1.1 0-2 0.9-2 2v16c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm0 18H4V4h16v16z"}],["path",{"d":"M6.5 15.5h11V17H19v-3.83c0-0.66-0.25-1.26-0.65-1.72V9c0-1.1-0.9-2-2-2H13c-0.37 0-0.720.12-1 0.32-0.28-0.2-0.63-0.32-1-0.32H7.65c-1.1 0-2 0.9-2 2v2.45c-0.40.46-0.65 1.06-0.65 1.72V17h1.5v-1.5zm6.25-7h4v2h-4v-2zm-5.5 0h4v2h-4v-2zM6.5 13c0-0.550.45-1 1-1h9c0.55 0 1 0.45 1 1v1h-11v-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
