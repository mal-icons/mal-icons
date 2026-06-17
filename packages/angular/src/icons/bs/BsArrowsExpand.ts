import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-arrows-expand",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsArrowsExpand {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M1 8a0.50.5 0 0 1 0.5-0.5h13a0.50.5 0 0 1 0 1h-13A0.50.5 0 0 1 1 8M7.650.15a0.50.5 0 0 1 0.71 0l2 2a0.50.5 0 0 1-0.710.71L8.5 1.71V5.5a0.50.5 0 0 1-1 0V1.71L6.35 2.85a0.50.5 0 1 1-0.71-0.71zM8 10a0.50.5 0 0 1 0.50.5v3.79l1.15-1.15a0.50.5 0 0 1 0.710.71l-2 2a0.50.5 0 0 1-0.71 0l-2-2a0.50.5 0 0 1 0.71-0.71L7.5 14.29V10.5A0.50.5 0 0 1 8 10"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsArrowsExpand;
