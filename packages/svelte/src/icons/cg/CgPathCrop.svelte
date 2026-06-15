<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["rect",{"opacity":"0.5","x":"6","y":"6","width":"8","height":"8","stroke":"currentColor","stroke-width":"2"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M9 9H19V19H9V9ZM15 11H17V17H11V15H15V11Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
