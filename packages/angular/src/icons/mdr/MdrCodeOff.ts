import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-code-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrCodeOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m19.17 12-3.88-3.88a11 0 1 1 1.41-1.41l4.59 4.59c0.390.390.39 1.02 0 1.41l-2.88 2.88L17 14.17 19.17 12zM2.1 4.93l3.49 3.49-2.88 2.88a11 0 0 0 0 1.41L7.3 17.3a11 0 1 0 1.41-1.41L4.83 12 7 9.83 19.07 21.9a11 0 1 0 1.41-1.41L3.51 3.51a11 0 0 0-1.41 0c-0.390.4-0.39 1.03 0 1.42z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrCodeOff;
