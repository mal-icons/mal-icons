<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 5H7V3H21V17H19V5Z","fill":"currentColor"}],["path",{"d":"M9 13V11H11V13H13V15H11V17H9V15H7V13H9Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3 7H17V21H3V7ZM5 9H15V19H5V9Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
