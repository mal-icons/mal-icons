import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-light",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtLight {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 17c0 1.10.9 2 2 2s2-0.9 2-2h-4z","opacity":".3"}],["path",{"d":"M13 6.06V3h-2v3.06c-4.50.5-8 4.31-8 8.93C3 16.1 3.9 17 5.01 17H8c0 2.21 1.79 4 4 4s4-1.79 4-4h2.99c1.11 0 2.01-0.9 2.01-2.01 0-4.62-3.5-8.43-8-8.93zM12 19c-1.1 0-2-0.9-2-2h4c0 1.1-0.9 2-2 2zm0-4H5c0-3.86 3.14-7 7-7s7 3.14 7 7h-7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtLight;
