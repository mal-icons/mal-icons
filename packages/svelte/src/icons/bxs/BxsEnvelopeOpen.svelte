<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m21.56 8.17-9-6a1 1 0 0 0-1.11 0l-9 6A11 0 0 0 2 9H2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9h0a11 0 0 0-0.44-0.83zM20 12.7 12 17l-8-4.3v-2.4l8 4.3 8-4.3V12.7z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
