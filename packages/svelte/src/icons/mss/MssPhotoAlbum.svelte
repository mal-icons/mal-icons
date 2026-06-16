<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M160-80v-800h640v800H160Zm60-60h520v-680h-60v266l-97-56-97 56v-266H220v680Zm64-97h397L553-408 448-272l-70-88-94 123Zm-64 97v-680 680Zm266-414 97-56 97 56-97-56-97 56Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
