import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-pencil-square",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsPencilSquare {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.5 1.94a0.50.5 0 0 1 0 0.71L14.46 3.69l-2-2L13.50.65a0.50.5 0 0 1 0.71 0l1.29 1.29zm-1.75 2.46-2-2L4.94 9.21a0.50.5 0 0 0-0.120.2l-0.8 2.41a0.250.25 0 0 0 0.320.32l2.41-0.8a0.50.5 0 0 0 0.2-0.12l6.81-6.81z"}],["path",{"fill-rule":"evenodd","d":"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a0.50.5 0 0 0-1 0v6a0.50.5 0 0 1-0.50.5h-11a0.50.5 0 0 1-0.5-0.5v-11a0.50.5 0 0 1 0.5-0.5H9a0.50.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsPencilSquare;
