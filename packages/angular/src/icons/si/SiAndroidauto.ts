import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-androidauto",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAndroidauto {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0c-0.6 0-1.110.32-1.390.8L0.48 18.4a1.6 1.6 0 0 0 1.39 2.4h2l7.7-13.580.43-0.77 8.13 14.35h2a1.6 1.6 0 0 0 1.39-2.4L13.390.8A1.6 1.6 0 0 0 12 0zm0 7.47l-9.07 16 0.540.53L12 20.8l8.53 3.20.54-0.53z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAndroidauto;
