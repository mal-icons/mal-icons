import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-water",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoWater {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-251v-60q38 0 61.5-23t68.5-23q45 0 70 27t64 27q39 0 65-27t71-27q45 0 70.5 27t64.5 27q39 0 64.5-27t70.5-27q45 0 68.5 23t61.5 23v60q-47 0-69.5-23T750-297q-38 0-64 27t-71 27q-45 0-71-27t-64-27q-38 0-64.5 27T344-243q-45 0-70.5-27T210-297q-38 0-60.5 23T80-251Zm0-160v-60q38 0 61.5-23t68.5-23q45 0 70 27t64 27q39 0 65-27t71-27q45 0 70.5 27t64.5 27q39 0 64.5-27t70.5-27q45 0 68.5 23t61.5 23v60q-47 0-69.5-23T750-457q-38 0-64 27t-71 27q-45 0-71-27t-64-27q-38 0-64.5 27T344-403q-45 0-70.5-27T210-457q-38 0-60.5 23T80-411Zm0-160v-60q38 0 61.5-23t68.5-23q45 0 70 27t64 27q39 0 65-27t71-27q45 0 70.5 27t64.5 27q39 0 64.5-27t70.5-27q45 0 68.5 23t61.5 23v60q-47 0-69.5-23T750-617q-38 0-64 27t-71 27q-45 0-71-27t-64-27q-38 0-64.5 27T344-563q-45 0-70.5-27T210-617q-38 0-60.5 23T80-571Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoWater;
