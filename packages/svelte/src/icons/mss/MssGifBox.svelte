<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M300-400h120v-70h-30v40h-60v-100h88v-30H300v160Zm165 0h30v-160h-30v160Zm75 0h30v-60h70v-30h-70v-40h90v-30H540v160ZM120-120v-720h720v720H120Zm60-60h600v-600H180v600Zm0 0v-600 600Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
