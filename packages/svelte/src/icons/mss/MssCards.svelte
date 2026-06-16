<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M220-500v-241h241v241H220Zm0 281v-241h241v241H220Zm280-281v-241h241v241H500Zm0 281v-241h241v241H500ZM280-560h121v-121H280v121Zm280 0h121v-121H560v121ZM280-279h121v-121H280v121Zm280 0h121v-121H560v121ZM401-560Zm159 0Zm0 160Zm-159 0ZM120-120v-720h720v720H120Zm60-60h600v-600H180v600Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
