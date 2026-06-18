import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-certificate-2-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCertificate2Off {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 12a3 3 0 1 0 3 3"}],["path",{"d":"M11 7h3"}],["path",{"d":"M10 18v4l2 -1l2 1v-4"}],["path",{"d":"M10 19h-2a2 2 0 0 1 -2 -2v-11m1.18 -2.82c0.25 -0.11 0.53 -0.17 0.82 -0.17h8a2 2 0 0 1 2 2v9m-0.17 3.82a2 2 0 0 1 -1.82 1.18h-2"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCertificate2Off;
