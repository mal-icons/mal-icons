<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M180-250h600q33 0 56.5-23.5T860-330v-290q0-33-23.5-56.5T780-700H180q-33 0-56.5 23.5T100-620v290q0 33 23.5 56.5T180-250Zm0 60q-57.75 0-98.87-41.12T40-330v-290q0-57.75 41.13-98.87T180-760h600q57.75 0 98.88 41.13T920-620v290q0 57.75-41.12 98.88T780-190H680q0 8-9 19t-21 11H310q-12 0-21-11t-9-19H180Zm300-285Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
