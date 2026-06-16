<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M212-212q-9-9-9-21t9-21l494-494q8-8 20.5-8.5T748-748q9 9 9 21t-9 21L254-212q-9 9-21 9t-21-9Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
