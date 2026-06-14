import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-vendor-microsoft",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiVendorMicrosoft {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 12.5c0-0.3-0.2-0.5-0.5-0.5h-6c-0.3 0-0.50.2-0.50.5v5c0 0.30.20.50.50.6l6 0.7c0.3 0 0.5-0.20.5-0.4v-5.9zM11.5 12c-0.3 0-0.50.2-0.50.5v5.9c0 0.30.20.50.50.6l9 1c0.3 0 0.5-0.20.5-0.4v-7c0-0.3-0.2-0.5-0.5-0.5l-9-0.1zM10 4.7c0-0.3-0.2-0.5-0.5-0.4l-6 0.7c-0.3 0-0.50.2-0.50.5v5c0 0.30.20.50.50.5h6c0.3 0 0.5-0.20.5-0.5v-5.8zM11.5 4.1c-0.3 0-0.50.3-0.50.6v5.9c0 0.30.20.50.50.5h9c0.3 0 0.5-0.20.5-0.5v-7c0-0.3-0.2-0.5-0.5-0.4l-9 0.9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiVendorMicrosoft;
