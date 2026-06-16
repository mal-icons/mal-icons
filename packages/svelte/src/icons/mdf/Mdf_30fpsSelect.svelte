<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 4v2h5v2H5v2h4v2H4v2h5c1.1 0 2-0.9 2-2v-1.5c0-0.83-0.17-1.5-1-1.50.83 0 1-0.67 1-1.5V6c0-1.1-0.9-2-2-2H4zm14 0c1.1 0 2 0.9 2 2v6c0 1.1-0.9 2-2 2h-3c-1.1 0-2-0.9-2-2V6c0-1.10.9-2 2-2h3zm0 2h-3v6h3V6zM5 22H3v-5h2v5zm4 0H7v-5h2v5zm4 0h-2v-5h2v5zm8 0h-6v-5h6v5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
