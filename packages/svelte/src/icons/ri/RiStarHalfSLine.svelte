<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 14.66L14.82 16.38L14.05 13.17L16.56 11.02L13.27 10.76L12 7.71V14.66ZM12 17L6.12 20.59L7.72 13.89L2.49 9.41L9.35 8.86L12 2.5L14.64 8.86L21.51 9.41L16.28 13.89L17.88 20.59L12 17Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
