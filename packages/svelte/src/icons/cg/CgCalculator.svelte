<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 5H7V7H17V5Z","fill":"currentColor"}],["path",{"d":"M7 9H9V11H7V9Z","fill":"currentColor"}],["path",{"d":"M9 13H7V15H9V13Z","fill":"currentColor"}],["path",{"d":"M7 17H9V19H7V17Z","fill":"currentColor"}],["path",{"d":"M13 9H11V11H13V9Z","fill":"currentColor"}],["path",{"d":"M11 13H13V15H11V13Z","fill":"currentColor"}],["path",{"d":"M13 17H11V19H13V17Z","fill":"currentColor"}],["path",{"d":"M15 9H17V11H15V9Z","fill":"currentColor"}],["path",{"d":"M17 13H15V19H17V13Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3 3C3 1.9 3.9 1 5 1H19C20.1 1 21 1.9 21 3V21C21 22.1 20.1 23 19 23H5C3.9 23 3 22.1 3 21V3ZM5 3H19V21H5V3Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
