import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-anchor",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssAnchor {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-80q-66 0-130.5-24T234-167q-51-39-82.5-88T120-355v-100l135 101-58 58q31 58 106 103.5T450-142v-388H320v-60h130v-74q-38-14-59-42t-21-64q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 36-21 64t-59 42v74h130v60H510v388q72-5 147-50.5T763-296l-58-58 135-101v100q0 51-31.5 100T726-167q-51 39-115.5 63T480-80Zm0-640q21 0 35.5-15t14.5-35q0-21-14.5-35.5T480-820q-20 0-35 14.5T430-770q0 20 15 35t35 15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssAnchor;
