import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-archive-box-arrow-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiArchiveBoxArrowDown {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"m20.25 7.5-0.62 10.63a2.25 2.25 0 0 1-2.25 2.12H6.62a2.25 2.25 0 0 1-2.25-2.12L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.38 7.5h17.25c0.62 0 1.13-0.5 1.13-1.12v-1.5c0-0.62-0.5-1.12-1.12-1.12H3.38c-0.62 0-1.120.5-1.12 1.13v1.5c0 0.620.5 1.13 1.13 1.13Z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiArchiveBoxArrowDown;
