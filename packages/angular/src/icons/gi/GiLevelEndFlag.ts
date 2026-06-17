import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-level-end-flag",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiLevelEndFlag {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M448 25c-8.4 0-15 6.61-15 15s6.6 15 15 15 15-6.61 15-15-6.6-15-15-15zm7 50.53L373.1 96l81.9 20.5V75.53zM439 131v292h18V135.5l-18-4.5zm-158 54v46h46v-46h-46zm-64 64v46h46v-46h-46zm64 0v46h46v-46h-46zm-128 64v46h46v-46h-46zm64 0v46h46v-46h-46zm64 0v46h46v-46h-46zM89 377v46h46v-46H89zm64 0v46h46v-46h-46zm64 0v46h46v-46h-46zm64 0v46h46v-46h-46zM25 441v46h46v-46H25zm64 0v46h46v-46H89zm64 0v46h46v-46h-46zm64 0v46h46v-46h-46zm64 0v46h46v-46h-46zm144 0v46h46v-46h-46z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiLevelEndFlag;
