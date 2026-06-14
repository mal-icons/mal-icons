import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ad-scan",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class AdScan {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M136 384h56c4.4 0 8-3.6 8-8V200h176c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H196c-37.6 0-68 30.4-68 68v180c0 4.4 3.6 8 8 8zm512-184h176v176c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V196c0-37.6-30.4-68-68-68H648c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM376 824H200V648c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v180c0 37.6 30.4 68 68 68h180c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm512-184h-56c-4.4 0-8 3.6-8 8v176H648c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h180c37.6 0 68-30.4 68-68V648c0-4.4-3.6-8-8-8zm16-164H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default AdScan;
