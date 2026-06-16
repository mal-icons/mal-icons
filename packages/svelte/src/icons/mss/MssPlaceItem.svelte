<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M120-120v-560h270v60H180v440h600v-440H570v-60h270v560H120Zm360-203L318-485l43-43 89 89v-521h60v521l89-89 43 43-162 162Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
