<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M586-160q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T586-220h145l-118-83q-10-7-12.5-19t4.5-22q7-10 18.83-12.5T646-352l119 82-50-136q-5-11 1-22t18-16q12-5 23 0.5t16 17.5l48 136 39-139q3-12 13-18t22-3q12 3 18.5 13t3.5 22l-68.15 255H586Zm-466 0v-680h640v283q-10-2-20-2.5t-20-0.5q-5 0-10 0.17-5 0.17-10 0.83v-221H180v440h301q-0.67 5-0.83 10-0.17 5-0.17 10 0 10 0.5 20t2.5 20H240L120-160Zm160-460h320v-60H280v60Zm0 170h200v-60H280v60ZM180-340v-440 440Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
