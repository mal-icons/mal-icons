<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M520-360h50v-90l84 90h66L608-480l112-120h-66l-84 90v-90h-50v240Zm-264 0h170v-136H306v-54h120v-50H256v137h120v53H256v50ZM120-120v-720h720v720H120Zm60-60h600v-600H180v600Zm0 0v-600 600Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
