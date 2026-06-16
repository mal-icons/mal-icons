<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M840-120H120v-720h720v720ZM510-450v270h270v-270H510Zm0-60h270v-270H510v270Zm-60 0v-270H180v270h270Zm0 60H180v270h270v-270Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
