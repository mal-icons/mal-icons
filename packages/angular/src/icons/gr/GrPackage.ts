import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-package",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrPackage {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M12.37 0.57L12 0.42L11.63 0.57L1.63 4.57L1 4.82V5.5V18.5V19.18L1.63 19.43L11.63 23.43L12 23.58L12.37 23.43L22.37 19.43L23 19.18V18.5V5.5V4.82L22.37 4.57L12.37 0.57ZM3 6.98V17.82L11 21.02V10.18L3 6.98ZM13 10.18V21.02L21 17.82V6.98L13 10.18ZM19.31 5.5L12 2.58L9.94 3.4L17.25 6.32L19.31 5.5ZM4.69 5.5L7.25 4.48L14.56 7.4L12 8.42L4.69 5.5Z","fill":"currentColor"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrPackage;
