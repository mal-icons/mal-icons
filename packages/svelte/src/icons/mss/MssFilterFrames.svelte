<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M80-80v-720h240l160-160 160 160h240v720H80Zm60-60h680v-600H140v600Zm100-100v-400h480v400H240Zm60-60h360v-280H300v280Zm180-139Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
