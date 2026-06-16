import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-nest-cam-wired-stand",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtNestCamWiredStand {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 17c-1.65 0-3 1.35-3 3v1h6v-1c0-1.65-1.35-3-3-3zm4-14-4.080.41C9.69 3.64 8 5.5 8 7.75s1.69 4.11 3.92 4.34l4.110.42L16 3z","opacity":".3"}],["path",{"d":"M16 1c-0.15 0 0.11-0.02-4.280.42C8.47 1.75 6 4.48 6 7.75s2.47 6 5.72 6.33l1.90.19-0.560.85c-0.35-0.08-0.7-0.12-1.06-0.12-2.76 0-5 2.24-5 5v2c0 0.550.45 1 1 1h8c0.55 0 1-0.45 1-1v-2c0-1.67-0.83-3.15-2.09-4.06l0.97-1.45c0.04 0 0.090.010.130.01 1.09 0 2-0.89 2-2V3C18 1.89 17.09 1 16 1zm-1 19v1H9v-1c0-1.65 1.35-3 3-3s3 1.35 3 3zm-3.08-7.91C9.69 11.86 8 10 8 7.75s1.69-4.11 3.92-4.34L16 3l0.03 9.5-4.11-0.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtNestCamWiredStand;
