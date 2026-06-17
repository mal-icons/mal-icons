import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-chevron-contract",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsChevronContract {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M3.65 13.85a0.50.5 0 0 0 0.71 0L8 10.21l3.65 3.65a0.50.5 0 0 0 0.71-0.71l-4-4a0.50.5 0 0 0-0.71 0l-4 4a0.50.5 0 0 0 0 0.71m0-11.71a0.50.5 0 0 1 0.71 0L8 5.79l3.65-3.65a0.50.5 0 0 1 0.710.71l-4 4a0.50.5 0 0 1-0.71 0l-4-4a0.50.5 0 0 1 0-0.71"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsChevronContract;
