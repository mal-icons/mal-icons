import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-artstation",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiArtstation {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 17.72l2.03 3.51h0a2.42 2.42 0 0 0 2.16 1.33h13.46l-2.79-4.84H0zm24 0.03c0-0.48-0.14-0.93-0.39-1.31L15.73 2.73a2.42 2.42 0 0 0-2.14-1.29H9.42L21.6 22.54l1.92-3.32c0.38-0.640.48-0.920.48-1.47zm-11.13-3.46L7.43 4.86l-5.44 9.43h10.89z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiArtstation;
