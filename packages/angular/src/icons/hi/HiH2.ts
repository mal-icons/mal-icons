import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-h2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiH2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M21.75 19.5H16.5v-1.61a2.25 2.25 0 0 1 1.24-2.01l2.89-1.44c0.65-0.33 1.12-0.95 1.12-1.68 0-0.5-0.04-0.99-0.12-1.46-0.13-0.82-0.83-1.42-1.67-1.49a15.2 15.2 0 0 0-3.460.12M2.24 4.49v7.5m0 0v7.5m0-7.5h10.5m0-7.5v7.5m0 0v7.5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiH2;
