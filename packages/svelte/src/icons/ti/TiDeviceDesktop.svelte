<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 1h-18c-1.65 0-3 1.35-3 3v11c0 1.65 1.35 3 3 3h6v2h-3c-0.55 0-1 0.45-1 1s0.45 1 1 1h12c0.55 0 1-0.45 1-1s-0.45-1-1-1h-3v-2h6c1.65 0 3-1.35 3-3v-11c0-1.65-1.35-3-3-3zm-7 19h-4v-2h4v2zm8-5c0 0.55-0.45 1-1 1h-18c-0.55 0-1-0.45-1-1v-11c0-0.550.45-1 1-1h18c0.55 0 1 0.45 1 1v11zM20 4h-16c-0.55 0-1 0.45-1 1v8c0 0.550.45 1 1 1h16c0.55 0 1-0.45 1-1v-8c0-0.55-0.45-1-1-1zm0 9h-16v-8h16v8z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
