<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M140-120q-24.75 0-42.37-17.62T80-180v-660l67 67 66-67 67 67 67-67 66 67 67-67 67 67 66-67 67 67 67-67 66 67 67-67v660q0 24.75-17.62 42.38T820-120H140Zm0-60h310v-280H140v280Zm370 0h310v-110H510v110Zm0-170h310v-110H510v110ZM140-520h680v-120H140v120Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
