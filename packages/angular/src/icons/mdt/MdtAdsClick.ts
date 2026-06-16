import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-ads-click",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtAdsClick {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.71 17.99A5.99 5.99 0 0 1 6 12c0-3.31 2.69-6 6-6 3.22 0 5.84 2.53 5.99 5.71l-2.1-0.63a4 4 0 1 0-4.81 4.81l0.63 2.1zM22 12c0 0.3-0.010.6-0.040.9l-1.97-0.59c0.01-0.10.01-0.210.01-0.31 0-4.42-3.58-8-8-8s-8 3.58-8 8 3.58 8 8 8c0.1 0 0.21 0 0.31-0.01l0.59 1.97c-0.30.03-0.60.04-0.90.04-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10zm-3.77 4.26L22 15l-10-3 3 10 1.26-3.77 4.27 4.27 1.98-1.98-4.28-4.26z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtAdsClick;
