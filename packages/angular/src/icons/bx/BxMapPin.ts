import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-map-pin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxMapPin {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m12 17 1-2V9.86c1.72-0.45 3-2 3-3.86 0-2.21-1.79-4-4-4S8 3.79 8 6c0 1.86 1.28 3.41 3 3.86V15l1 2zM10 6c0-1.10.9-2 2-2s2 0.9 2 2-0.9 2-2 2-2-0.9-2-2z"}],["path",{"d":"m16.27 10.56-0.53 1.93C18.33 13.21 20 14.58 20 16c0 1.89-3.28 4-8 4s-8-2.11-8-4c0-1.42 1.68-2.79 4.27-3.51l-0.53-1.93C4.2 11.54 2 13.62 2 16c0 3.36 4.39 6 10 6s10-2.64 10-6c0-2.38-2.2-4.46-5.73-5.44z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxMapPin;
