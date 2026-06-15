<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 8V10H8V14H11V16H6V8H11Z","fill":"currentColor"}],["path",{"d":"M18 8V10H15V14H18V16H13V8H18Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2 5C2 4.45 2.45 4 3 4H21C21.55 4 22 4.45 22 5V19C22 19.55 21.55 20 21 20H3C2.45 20 2 19.55 2 19V5ZM4 18V6H20V18H4Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
