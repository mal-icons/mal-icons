import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-edit-location",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtEditLocation {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.11 14H8V7.91l0.59-0.59L11.91 4C8.61 4.05 6 6.6 6 10.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.79 6-9.14v-0.08l-3.3 3.3-0.590.58z","opacity":".3"}],["path",{"d":"M18.17 4.91 17.1 3.84l-5.55 5.55v1.08h1.08l5.54-5.56zM16 2.74l1.29-1.29c0.58-0.59 1.52-0.59 2.11-0.01l0.010.01 1.15 1.15c0.590.590.59 1.54 0 2.12l-0.680.68-0.020.02-0.580.58-6 6H10V8.74l6-6zm-2.28-0.55-0.550.55-1.27 1.27c-3.30.05-5.9 2.6-5.9 6.2 0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.79 6-9.14v-0.1l1.8-1.8c0.130.60.2 1.240.2 1.9 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8 0-4.98 3.8-8.2 8-8.20.58 0 1.160.06 1.720.18z"}],["path",{"d":"M18.17 4.91 17.1 3.84l-5.55 5.55v1.08h1.08z","opacity":".3"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtEditLocation;
