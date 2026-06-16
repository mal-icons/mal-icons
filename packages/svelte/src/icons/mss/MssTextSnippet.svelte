<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M180-180h600v-375L555-780H180v600Zm-60 60v-720h460l260 260v460H120Zm159-171h402v-60H279v60Zm0-159h402v-60H279v60Zm0-159h276v-60H279v60Zm-99 429v-600 600Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
