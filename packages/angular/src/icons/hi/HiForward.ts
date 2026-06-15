import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-forward",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiForward {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M3 8.69c0-0.860.93-1.41 1.68-0.98l7.11 4.06a1.13 1.13 0 0 1 0 1.95l-7.11 4.06A1.13 1.13 0 0 1 3 16.81V8.69ZM12.75 8.69c0-0.860.93-1.41 1.68-0.98l7.11 4.06a1.13 1.13 0 0 1 0 1.95l-7.11 4.06a1.13 1.13 0 0 1-1.68-0.98V8.69Z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiForward;
