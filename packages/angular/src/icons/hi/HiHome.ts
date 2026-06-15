import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-home",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiHome {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"m2.25 12 8.95-8.95c0.44-0.44 1.15-0.44 1.59 0L21.75 12M4.5 9.75v10.13c0 0.620.5 1.13 1.13 1.13H9.75v-4.87c0-0.620.5-1.12 1.13-1.12h2.25c0.62 0 1.130.5 1.13 1.13V21h4.13c0.62 0 1.13-0.5 1.13-1.12V9.75M8.25 21h8.25"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiHome;
