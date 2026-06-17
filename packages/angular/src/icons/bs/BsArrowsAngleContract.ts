import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-arrows-angle-contract",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsArrowsAngleContract {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M0.17 15.83a0.50.5 0 0 0 0.71 0l4.1-4.1V14.5a0.50.5 0 1 0 1 0v-3.97a0.50.5 0 0 0-0.5-0.5H1.5a0.50.5 0 0 0 0 1h2.77L0.17 15.12a0.50.5 0 0 0 0 0.71M15.830.17a0.50.5 0 0 0-0.71 0l-4.1 4.1V1.5a0.50.5 0 1 0-1 0v3.98a0.50.5 0 0 0 0.50.5H14.5a0.50.5 0 0 0 0-1h-2.77L15.830.88a0.50.5 0 0 0 0-0.71"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsArrowsAngleContract;
