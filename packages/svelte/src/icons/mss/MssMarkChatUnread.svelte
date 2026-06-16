<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M80-80v-800h497q-4 14-6 29.5t-1 30.5H140v520h680v-349q16.79-5 31.4-13.5Q866-671 880-682v442H240L80-80Zm60-740v520-520Zm619.88 101Q714-719 682-751.12q-32-32.12-32-78Q650-875 682.12-907q32.12-32 78-32Q806-939 838-906.88q32 32.12 32 78Q870-783 837.88-751q-32.12 32-78 32Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
