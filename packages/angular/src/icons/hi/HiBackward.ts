import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-backward",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiBackward {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M21 16.81c0 0.86-0.93 1.41-1.680.98l-7.11-4.06a1.13 1.13 0 0 1 0-1.95l7.11-4.06A1.13 1.13 0 0 1 21 8.69v8.12ZM11.25 16.81c0 0.86-0.93 1.41-1.680.98l-7.11-4.06a1.13 1.13 0 0 1 0-1.95l7.11-4.06a1.13 1.13 0 0 1 1.680.98v8.12Z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiBackward;
