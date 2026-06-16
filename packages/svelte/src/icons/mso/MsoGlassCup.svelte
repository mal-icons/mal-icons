<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M262-80q-23.25 0-40.5-14.93Q204.25-109.86 202-133l-82-747h720l-82 747q-2.25 23.14-19.5 38.07Q721.25-80 698-80H262Zm448-170H250l12 110h436l12-110ZM187-820l56 510h473.53L773-820H187Zm511 680H262h436Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
