import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-jellyfin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiJellyfin {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0C8.830-1.4 18.540.16 21.67c1.56 3.13 22.14 3.09 23.68 0C25.38 18.57 15.18 0 12 0zm7.76 18.95c-1.01 2.03-14.49 2.05-15.51 0C3.22 16.9 9.92 4.76 12 4.76c2.08 0 8.77 12.17 7.76 14.2zM12 9.2c-1.05 0-4.45 6.15-3.93 7.190.52 1.04 7.35 1.03 7.86 0 0.51-1.03-2.87-7.19-3.93-7.19z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiJellyfin;
