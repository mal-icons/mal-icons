<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M444-330q-52 0-102 14.5T247-275l15 135h436l17-150h-18q-37 0-68-5.5T544-316q-25-7-49.5-10.5T444-330ZM187-820l53 480q47-24 98.97-37T444-390q30 0 59.5 4t56.5 12q51.13 14 78.23 19 27.1 5 57.77 5h25l52-470H187Zm75 740q-23.25 0-40.5-14.93Q204.25-109.86 202-133l-78-714q-2-13.5 6.5-23.25T153-880h654q14 0 22.5 9.75T836-847l-78 714q-2.25 23.14-19.5 38.07Q721.25-80 698-80H262Zm182-60h253-435 182Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
