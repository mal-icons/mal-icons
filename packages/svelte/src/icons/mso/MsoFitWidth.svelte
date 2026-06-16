<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M120-120v-720h60v720h-60Zm165-330v-60h60v60h-60Zm165 0v-60h60v60h-60Zm165 0v-60h60v60h-60Zm165 330v-720h60v720h-60Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
