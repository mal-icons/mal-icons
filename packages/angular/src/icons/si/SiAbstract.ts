import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-abstract",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAbstract {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0c9.6 0 12 2.4 12 12 0 9.6-2.4 12-12 12-9.6 0-12-2.4-12-12C0 2.4 2.4 0 12 0zm-1.97 18.56c2.520 4.6-2.07 4.61-4.59 0-2.52-2.07-4.59-4.59-4.59S5.45 11.45 5.45 13.97c0 2.52 2.07 4.59 4.58 4.6zm8.34-0.19V5.63H5.63v2.25h10.5v10.5h2.25zm-8.34-6.75a2.34 2.34 0 110 4.69 2.34 2.34 0 1-4.69z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAbstract;
