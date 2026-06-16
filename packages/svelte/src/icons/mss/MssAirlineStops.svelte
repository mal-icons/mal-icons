<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M370-200v-60h80q-8-157-114.5-263.5T80-630v-60q136 0 244 78.5T480-407q33-91 99.5-166.5T740-700H580v-60h260v260h-60v-153q-121 63-191.5 165T510-260h80v60H370Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
