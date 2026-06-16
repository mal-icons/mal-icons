<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M420-70v-280h-80v-253q0-24.75 17.63-42.37T400-663h160q24.75 0 42.38 17.63T620-603v253h-80v280H420Zm60-644-83-83 83-83 83 83-83 83Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
