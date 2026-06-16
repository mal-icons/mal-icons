import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-call-merge",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrCallMerge {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M261-185q-8-9-8.5-21t8.5-21l187-187v-307L347-620q-8 8-20.5 8t-21.5-9q-9-9-9-21.5t9-21.5l152-152q5-5 10-7t11-2q6 0 11 2t10 7l153 153q8 8 8.5 20.5T652-621q-9 9-21.5 9t-21.5-9L508-721v332L303-184q-8 8-20.5 8t-21.5-9Zm395 6L519-315l43-43 137 137q8 8 8.5 20.5T699-179q-9 9-21.5 9t-21.5-9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrCallMerge;
