<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M120-120v-720h720v720H120Zm60-60h600v-600H180v600Zm0 0v-600 600Zm110-350h140v-140H290v140Zm240 0h140v-140H530v140ZM290-290h140v-140H290v140Zm240 0h140v-140H530v140Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
