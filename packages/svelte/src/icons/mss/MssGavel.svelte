<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M160-120v-60h480v60H160Zm222-212L160-554l70-72 224 222-72 72Zm254-254L414-810l72-70 222 222-72 72Zm202 426L302-696l42-42 536 536-42 42Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
