import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-phone-missed",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPhoneMissed {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M23.09 16.2c-6.33-5.59-15.86-5.59-22.18 0-0.840.74-0.84 2.05-0.05 2.84l1.2 1.2c0.710.71 1.840.77 2.620.15l1.97-1.57c0.47-0.370.75-0.940.75-1.55V14.7c2.98-0.97 6.21-0.98 9.2 0v2.58c0 0.60.28 1.170.75 1.55l1.96 1.56c0.790.62 1.910.56 2.62-0.15l1.2-1.2c0.8-0.790.79-2.1-0.04-2.84zM6 9c0.55 0 1-0.45 1-1V6.43l4.24 4.24c0.390.39 1.020.39 1.41 0l5.66-5.66A11 0 1 0 16.9 3.6l-4.95 4.95L8.4 5H10c0.55 0 1-0.45 1-1s-0.45-1-1-1H6c-0.55 0-1 0.45-1 1v4c0 0.550.45 1 1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPhoneMissed;
