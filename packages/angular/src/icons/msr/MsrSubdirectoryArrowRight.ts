import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-subdirectory-arrow-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSubdirectoryArrowRight {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M545-142q-9-9-9-21.5t9-21.5l140-140H230q-13 0-21.5-8.5T200-355v-415q0-13 8.5-21.5T230-800q13 0 21.5 8.5T260-770v385h426L545-526q-8-8-8-20.5t9-21.5q9-9 21.5-9t21.5 9l190 190q5 5 7 10t2 11q0 6-2 11t-7 10L587-141q-8 9-20.5 8.5T545-142Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSubdirectoryArrowRight;
