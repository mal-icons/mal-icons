import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-tryitonline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTryitonline {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.75 6a0.750.75 0 100 1.5H4.5v9.75a0.750.75 0 101.5 0V7.5h17.25a0.750.75 0 100-1.5zm10.5 3a0.750.75 0 0-0.750.75v7.5a0.750.75 0 101.5 0v-7.5a0.750.75 0 0-0.75-0.75zm8.25 0a4.51 4.51 0 0-4.5 4.5c0 2.48 2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5S21.98 9 19.5 9zm0 1.5c1.67 0 3 1.33 3 3s-1.33 3-3 3-3-1.33-3-3 1.33-3 3-3Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTryitonline;
