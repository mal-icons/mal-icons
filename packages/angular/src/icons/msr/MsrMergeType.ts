import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-merge-type",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrMergeType {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M657-184 452-389v-332L351-620q-9 9-21 9t-21-10q-9-8-9-21t9-22l152-152q5-5 10-7t11-2q6 0 11 2t10 7l153 153q9 9 9 21t-9 21q-9 9-21.5 8.5T613-621L512-721v307l187 187q9 9 9 21t-9 21q-9 9-21.5 9t-20.5-8Zm-395 5q-9-9-9-21.5t9-21.5l136-136 43 43-137 137q-8 8-20.5 8t-21.5-9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrMergeType;
