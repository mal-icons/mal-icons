<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.82 11.14 11.25 0 1.61 5.57zM1.24 6.65v10.71L4.33 12zM12 23.57l6.43-11.14H5.57zM12 0.43 5.57 11.57h12.86zm10.76 16.92V6.65L19.67 12zm00.86-0.370.22-3.21-5.57L12.75 24zm0-12.43L12.75 0l6.43 11.14 3.22-5.57zM1.24 18.22 11.25 24l-6.43-11.14-3.22 5.57z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
