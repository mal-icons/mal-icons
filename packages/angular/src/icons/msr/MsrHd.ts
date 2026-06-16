import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-hd",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrHd {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M290-446h100v64q0 10.83 7.12 17.92 7.12 7.08 18 7.08Q426-357 433-364.08q7-7.08 7-17.92v-196q0-10.83-7.12-17.92-7.12-7.08-18-7.08Q404-603 397-595.92q-7 7.08-7 17.92v82H290v-82q0-10.83-7.12-17.92-7.12-7.08-18-7.08Q254-603 247-595.92q-7 7.08-7 17.92v196q0 10.83 7.12 17.92 7.12 7.08 18 7.08Q276-357 283-364.08q7-7.08 7-17.92v-64Zm245 89h135q20 0 35-15t15-35v-146q0-20-15-35t-35-15H535q-6 0-10.5 4.5T520-588v216q0 6 4.5 10.5T535-357Zm35-50v-146h100v146H570ZM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h680v-520H140v520Zm0 0v-520 520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrHd;
