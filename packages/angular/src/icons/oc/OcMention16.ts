import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-mention-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcMention16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 0.5a7.5 7.5 0 0 1 7.5 7.46l00.04v1.16a2.61 2.61 0 0 1-4.78 1.45A3.76 3.76 0 0 1 8 11.78 3.78 3.78 0 1 1 11.78 8v1.16a1.11 1.11 0 0 0 2.23 0L14 8a6 6 0 1 0-3.31 5.370.750.75 0 0 1 0.67 1.34A7.5 7.5 0 1 1 8 0.5Zm0 5.23a2.28 2.28 0 1 0 0 4.55 2.28 2.28 0 0 0 0-4.55Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcMention16;
