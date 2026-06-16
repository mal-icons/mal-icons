<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M320-80v-560h560v560H320Zm60-60h440v-440H380v440Zm-180-46v-574h574v60H260v514h-60ZM80-306v-574h574v60H140v514H80Zm300 166v-440 440Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
