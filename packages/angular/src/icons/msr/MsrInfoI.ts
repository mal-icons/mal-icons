import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-info-i",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrInfoI {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M479.91-700Q451-700 430.5-720.59q-20.5-20.59-20.5-49.5Q410-799 430.59-819.5q20.59-20.5 49.5-20.5Q509-840 529.5-819.41q20.5 20.59 20.5 49.5Q550-741 529.41-720.5q-20.59 20.5-49.5 20.5Zm-0.03 580Q459-120 444.5-134.58 430-149.17 430-170v-380q0-20.83 14.62-35.42Q459.24-600 480.12-600 501-600 515.5-585.42 530-570.83 530-550v380q0 20.83-14.62 35.42Q500.77-120 479.88-120Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrInfoI;
