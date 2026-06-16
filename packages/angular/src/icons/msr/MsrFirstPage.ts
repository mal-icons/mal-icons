import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-first-page",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFirstPage {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M665-265 474-456q-5-5-7-10t-2-11q0-6 2-11t7-10l192-192q9-9 21.5-9t21.5 9q9 9 9 21.5t-9 21.5L539-477l170 170q9 9 9 21t-9 21q-9 9-22 9t-22-9Zm-395 25q-13 0-21.5-8.5T240-270v-420q0-13 8.5-21.5T270-720q13 0 21.5 8.5T300-690v420q0 13-8.5 21.5T270-240Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFirstPage;
