<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.66 0a5.71 5.71 0 0 0-5.71 5.71v1.53h14.49a3.62 3.62 0 0 0 0-7.25ZM2.94 8.38v7.25h14.49a3.62 3.62 0 0 0 0-7.25zm0 8.38v3.62a3.62 3.62 0 0 0 7.25 0v-3.62z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
