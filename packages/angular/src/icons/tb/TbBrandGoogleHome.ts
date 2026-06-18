import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-google-home",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandGoogleHome {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.07 21h-14.14a1.93 1.93 0 0 1 -1.93 -1.93v-6.86c0 -0.51 0.2 -1 0.57 -1.36l7.07 -7.06a1.93 1.93 0 0 1 2.73 0l7.07 7.06c0.36 0.36 0.57 0.85 0.57 1.37v6.86a1.93 1.93 0 0 1 -1.93 1.93"}],["path",{"d":"M7 13v4h10v-4l-5 -5"}],["path",{"d":"M14.8 5.2l-11.8 11.8"}],["path",{"d":"M7 17v4"}],["path",{"d":"M17 17v4"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandGoogleHome;
