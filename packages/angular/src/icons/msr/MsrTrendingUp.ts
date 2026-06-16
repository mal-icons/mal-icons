import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-trending-up",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrTrendingUp {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M102-262q-9-9-8.5-21t8.5-21l249-249q5-5 10-7t11-2q6 0 11 2t10 7l146 146 241-241h-97q-13 0-21.5-8.5T653-678q0-13 8.5-21.5T683-708h167q13 0 21.5 8.5T880-678v167q0 12-8.5 21t-20.5 9q-12 0-21-9t-9-21v-93L559-342q-5 5-10 7t-11 2q-6 0-11-2t-10-7L371-488 144-261q-8 8-20.5 8t-21.5-9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrTrendingUp;
