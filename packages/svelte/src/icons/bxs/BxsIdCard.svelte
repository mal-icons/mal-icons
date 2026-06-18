<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 4H4c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zM8.72 8c1.15 0 2 0.85 2 2s-0.85 2-2 2-2-0.85-2-2 0.85-2 2-2zm3.72 8H5v-0.46c0-1.37 1.68-2.78 3.72-2.78s3.72 1.41 3.72 2.79V16zM19 15h-4v-2h4v2zm0-4h-5V9h5v2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
