<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 7V11H11V7H7Z","fill":"currentColor"}],["path",{"d":"M13 7H17V11H13V7Z","fill":"currentColor"}],["path",{"d":"M13 13V17H17V13H13Z","fill":"currentColor"}],["path",{"d":"M7 13H11V17H7V13Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3 3H21V21H3V3ZM5 5V19H19V5H5Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
