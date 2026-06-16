import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-diagnosis",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssDiagnosis {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M320-210h320v-60H320v60Zm0-120h320v-60H320v60Zm160-154q64-58 107-98t43-90q0-31.91-23.04-54.95Q583.91-750 552-750q-25 0-41 9.5T480-712q-15-19-31-28.5t-41-9.5q-31.91 0-54.95 23.05Q330-703.91 330-672q0 50 41.5 88.5T480-484ZM160-80v-800h640v800H160Zm60-60h520v-680H220v680Zm0 0v-680 680Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssDiagnosis;
