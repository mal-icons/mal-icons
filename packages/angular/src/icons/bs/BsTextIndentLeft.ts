import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-text-indent-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsTextIndentLeft {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 3.5a0.50.5 0 0 1 0.5-0.5h11a0.50.5 0 0 1 0 1h-11a0.50.5 0 0 1-0.5-0.5m0.65 2.15a0.50.5 0 0 1 0.71 0l2 2a0.50.5 0 0 1 0 0.71l-2 2a0.50.5 0 0 1-0.71-0.71L4.29 8 2.65 6.35a0.50.5 0 0 1 0-0.71M7 6.5a0.50.5 0 0 1 0.5-0.5h6a0.50.5 0 0 1 0 1h-6a0.50.5 0 0 1-0.5-0.5m0 3a0.50.5 0 0 1 0.5-0.5h6a0.50.5 0 0 1 0 1h-6a0.50.5 0 0 1-0.5-0.5m-5 3a0.50.5 0 0 1 0.5-0.5h11a0.50.5 0 0 1 0 1h-11a0.50.5 0 0 1-0.5-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsTextIndentLeft;
