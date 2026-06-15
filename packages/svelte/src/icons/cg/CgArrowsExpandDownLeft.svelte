<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M13 5C13 3.9 13.9 3 15 3H19C20.1 3 21 3.9 21 5V9C21 10.1 20.1 11 19 11H15C13.9 11 13 10.1 13 9V5ZM15 5H19V9H15V5Z","fill":"currentColor"}],["path",{"d":"M5 13H3V21H11V19H6.41L11.78 13.64C12.17 13.25 12.17 12.61 11.78 12.22C11.39 11.83 10.75 11.83 10.36 12.22L5 17.59V13Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
