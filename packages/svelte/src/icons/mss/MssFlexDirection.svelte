<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M80-160v-280h360v280H80Zm0-360v-280h360v280H80Zm60-60h240v-160H140v160Zm594 420L548-346l42-42 114 113v-525h60v525l114-113 42 42-186 186Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
