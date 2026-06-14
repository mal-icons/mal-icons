import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-undo-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcUndo16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.22 6.28a0.750.75 0 0 1 0-1.06l3.5-3.5a0.750.75 0 1 1 1.06 1.06L3.56 5h7.19l00.01L10.75 5c0.06 0 0.120.010.170.02A4.5 4.5 0 0 1 10.5 14H8.8a0.750.75 0 0 1 0-1.5H10.5a3 3 0 1 0 0-6H3.56L5.78 8.72a0.750.75 0 1 1-1.06 1.06l-3.5-3.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcUndo16;
