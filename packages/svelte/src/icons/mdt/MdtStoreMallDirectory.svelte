<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m5.64 9-0.6 3h13.92l-0.6-3z","opacity":".3"}],["path",{"d":"m4 7-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5H4zm8 11H6v-4h6v4zm-6.96-6 0.6-3h12.72l0.6 3H5.04zM4 4h16v2H4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
