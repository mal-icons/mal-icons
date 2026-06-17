import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-arrow-down-up",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsArrowDownUp {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M11.5 15a0.50.5 0 0 0 0.5-0.5V2.71l3.15 3.15a0.50.5 0 0 0 0.71-0.71l-4-4a0.50.5 0 0 0-0.71 0l-4 4a0.50.5 0 1 0 0.710.71L11 2.71V14.5a0.50.5 0 0 0 0.50.5m-7-14a0.50.5 0 0 1 0.50.5v11.79l3.15-3.15a0.50.5 0 0 1 0.710.71l-4 4a0.50.5 0 0 1-0.71 0l-4-4a0.50.5 0 0 1 0.71-0.71L4 13.29V1.5a0.50.5 0 0 1 0.5-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsArrowDownUp;
