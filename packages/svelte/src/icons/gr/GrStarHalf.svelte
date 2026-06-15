<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["g",{"fill":"none","fill-rule":"evenodd"}],["polygon",{"fill":"currentColor","fill-opacity":".2","points":"12 16.67 12 2 14.5 9.5 22 9.5 16 14 19 22"}],["polygon",{"fill":"currentColor","points":"12 16.67 5 22 8 14 2 9.5 9.5 9.5 12 2"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
