<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["g",{"fill":"none","fill-rule":"evenodd"}],["circle",{"cx":"7","cy":"12","r":"7","fill":"currentColor"}],["circle",{"cx":"17","cy":"12","r":"7","fill":"currentColor","fill-opacity":".8"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
