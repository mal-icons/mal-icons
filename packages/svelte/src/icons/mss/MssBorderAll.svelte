<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M120-120v-720h720v720H120Zm660-60v-270H510v270h270Zm0-600H510v270h270v-270Zm-600 0v270h270v-270H180Zm0 600h270v-270H180v270Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
