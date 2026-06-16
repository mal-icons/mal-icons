import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-flight-class",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtFlightClass {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 6h2v5h-2z","opacity":".3"}],["path",{"d":"M16 4h-2c-1.1 0-2 0.9-2 2v5c0 1.10.9 2 2 2h2c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zm0 7h-2V6h2v5zm-6.5 5H18v2H9.49c-0.88 0-1.66-0.58-1.92-1.43L5 8V4h2v4l2.5 8zM8 19h10v2H8v-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtFlightClass;
