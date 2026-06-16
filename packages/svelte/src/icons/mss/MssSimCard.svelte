<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M274-193h60v-60h-60v60Zm0-156h60v-166h-60v166Zm174 156h60v-170h-60v170Zm0-262h60v-60h-60v60Zm182 262h60v-60h-60v60Zm0-156h60v-166h-60v166ZM160-80v-561l239-239h401v800H160Zm60-60h520v-680H426L220-613.87V-140Zm0 0h520-520Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
