<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M440-269h79v-111h114v-80H519v-111h-79v111H327v80h113v111ZM200-120v-599h560v599H200Zm60-55h440v-484H260v484Zm-20-605v-60h481v60H240Zm20 605v-484 484Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
