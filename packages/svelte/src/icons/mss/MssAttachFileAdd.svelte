<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M460-80q-91 0-155.5-62.5T240-296v-430q0-63.52 45.53-108.76Q331.06-880 395-880q65 0 110 45t45 110v334h-40v-335q0-47.88-33.29-80.94-33.29-33.06-81.5-33.06Q347-840 313.5-806.94T280-726v432q0 73 52.88 123.5T460-120q38.06 0 71.53-14.5Q565-149 590-174v52q-28 20-60.5 31T460-80Zm190-50v-120H530v-60h120v-120h60v120h120v60H710v120h-60ZM460-280v40q-38 0-64-28.5T370-336v-392h40v395q0 22 14.38 37.5T460-280Zm180-237v-211h40v211h-40Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
