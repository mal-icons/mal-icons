import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-folder-open",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiFolderOpen {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M3.75 9.78c0.11-0.020.23-0.030.34-0.03h15.81c0.12 0 0.230.010.340.03m-16.5 0a2.25 2.25 0 0 0-1.88 2.54l0.86 6a2.25 2.25 0 0 0 2.23 1.93H19.05a2.25 2.25 0 0 0 2.23-1.93l0.86-6a2.25 2.25 0 0 0-1.88-2.54m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.88a1.5 1.5 0 0 1 1.060.44l2.12 2.12a1.5 1.5 0 0 0 1.060.44H18A2.25 2.25 0 0 1 20.25 9v0.78"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiFolderOpen;
