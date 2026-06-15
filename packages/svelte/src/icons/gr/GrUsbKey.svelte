<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3 6C1.34 6 0 7.34 0 9V14C0 15.66 1.34 17 3 17H16H17V16H23H24V15V8V7H23H17V6H16H3ZM17 9V14H22V9H17ZM15 15V8H3C2.45 8 2 8.45 2 9V14C2 14.55 2.45 15 3 15H15ZM19 11.01H19.5H19.51H20.01V10.51V10.5V10H19.51H19.5H19V10.5V10.51V11.01ZM19.51 13.01H19.01V12.51V12.5V12H19.51H19.52H20.02V12.5V12.51V13.01H19.52H19.51Z","fill":"currentColor"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
