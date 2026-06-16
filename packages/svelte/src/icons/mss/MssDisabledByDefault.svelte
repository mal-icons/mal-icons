<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M180-180h600v-600H180v600Zm-60 60v-720h720v720H120Zm216-174 144-144 144 144 42-42-144-144 144-144-42-42-144 144-144-144-42 42 144 144-144 144 42 42ZM180-180v-600 600Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
