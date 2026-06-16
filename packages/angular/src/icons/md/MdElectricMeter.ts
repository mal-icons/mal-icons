import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-electric-meter",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdElectricMeter {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 11a9 9 0 0 0-18 0c0 3.92 2.51 7.24 6 8.48V22h2v-2.06a8.26 8.26 0 0 0 2 0V22h2v-2.52c3.49-1.24 6-4.56 6-8.48zm-9 7c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"}],["path",{"d":"M8 7h8v2H8zm4.75 3-3 3L11 14.25 9.75 15.5l1.5 1.5 3-3L13 12.75l1.25-1.25z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdElectricMeter;
