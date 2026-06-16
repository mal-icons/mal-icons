<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M280-80v-249H120v-148l333-142v-42q-37-10-60.5-40.5T369-770q0-46 33-78t79.46-32Q527-880 560-847.92q33 32.08 33 77.92h-60q0-21-15.5-35.5T481-820q-21 0-36.5 14.38T429-770q0 22.95 15.53 38.48Q460.05-716 483-716h30v97l327 143v147H680v249H280Zm60-300h280-280Zm-160-9h100v-51h400v51h100v-45L483-568 180-434v45Zm160 249h280v-240H340v240Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
