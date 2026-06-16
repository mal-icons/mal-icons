<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M120-160v-640h60v640h-60Zm660 0v-640h60v640h-60ZM308-284l148-398h48l149 398h-48l-39-111H394l-39 111h-47Zm101-151h142l-70-196h-2l-70 196Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
