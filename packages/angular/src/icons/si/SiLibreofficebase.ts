import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-libreofficebase",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiLibreofficebase {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 13h-1v-1h1v1zm0 1h-1v1h1v-1zm0 2h-1v1h1v-1zm-0.6-16H15l7 7V0h-5.6zM13 0l9 9v12c0 1.66-1.34 3-3 3H5c-1.66 0-3-1.34-3-3V3c0-1.66 1.34-3 3-3h8zM6 11c0 0.55 1.34 1 3 1s3-0.45 3-1v-1c0-0.55-1.34-1-3-1s-3 0.45-3 1v1zm0 2c0 0.55 1.34 1 3 1s3-0.45 3-1v-1c0 0.55-1.34 1-3 1s-3-0.45-3-1v1zm0 2c0 0.55 1.34 1 3 1s3-0.45 3-1v-1c0 0.55-1.34 1-3 1s-3-0.45-3-1v1zm0 2c0 0.55 1.34 1 3 1s3-0.45 3-1v-1c0 0.55-1.34 1-3 1s-3-0.45-3-1v1zm12-6h-5v7h5v-7zm-3 1h-1v1h1v-1zm0 4h-1v1h1v-1zm0-2h-1v1h1v-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiLibreofficebase;
