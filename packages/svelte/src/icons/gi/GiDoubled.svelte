<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M304.83 16c-261.69 0-320.71 387.66-62.34 387.66 86.28 0 86.96-129.37 0-129.37-139.95 0-99.13-202.9 62.34-258.28zm-30.94 92.34c-86.28 0-86.95 129.38 0 129.38 139.95 0 88.35 202.9-73.12 258.28 261.69 0 331.49-387.66 73.13-387.66z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
