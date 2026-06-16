<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M317-140h326l48-190H269l48 190Zm0 60q-20 0-36.29-12.54Q264.43-105.08 259-125l-52-205h546l-52 205q-5.43 19.92-21.71 32.46Q663-80 643-80H317ZM180-390h600v-100H180v100Zm300-251q5-87 78-160.5T719-880q-3 81-67 150.5T510-645v95h330v160q0 24.75-17.62 42.38T780-330H180q-24.75 0-42.37-17.62T120-390v-160h330v-95q-78-15-141.5-84.5T241-880q88 5 161.5 78T480-641Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
