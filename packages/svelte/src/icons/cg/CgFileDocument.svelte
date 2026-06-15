<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 18H17V16H7V18Z","fill":"currentColor"}],["path",{"d":"M17 14H7V12H17V14Z","fill":"currentColor"}],["path",{"d":"M7 10H11V8H7V10Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M6 2C4.34 2 3 3.34 3 5V19C3 20.66 4.34 22 6 22H18C19.66 22 21 20.66 21 19V9C21 5.13 17.87 2 14 2H6ZM6 4H13V9H19V19C19 19.55 18.55 20 18 20H6C5.45 20 5 19.55 5 19V5C5 4.45 5.45 4 6 4ZM15 4.1C16.61 4.43 17.94 5.53 18.58 7H15V4.1Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
