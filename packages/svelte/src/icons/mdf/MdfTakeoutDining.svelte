<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M5.26 11h13.48l-0.67 9H5.93l-0.67-9zm3.76-7h5.95L19 7.38l1.59-1.59L22 7.21 19.21 10H4.79L2 7.21 3.41 5.8 5 7.38 9.02 4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
