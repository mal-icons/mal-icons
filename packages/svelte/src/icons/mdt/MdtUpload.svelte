<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.83 8H11v6h2V8h1.17L12 5.83z","opacity":".3"}],["path",{"d":"m12 3-7 7h4v6h6v-6h4l-7-7zm1 5v6h-2V8H9.83L12 5.83 14.17 8H13zM5 18h14v2H5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
