import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-graphql",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGraphql {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0a2.14 2.14 0 1 0 0 4.28 2.14 2.14 0 1 0 0-4.28zm8.54 4.93a2.14 2.14 0 1 0 0 4.28 2.14 2.14 0 1 0 0-4.28zm0 9.86a2.14 2.14 0 1 0 0 4.28 2.14 2.14 0 1 0 0-4.28zm-8.54 4.93a2.14 2.14 0 1 0 0 4.28 2.14 2.14 0 1 0 0-4.28zm-8.54-4.93a2.14 2.14 0 1 0 0 4.28 2.14 2.14 0 1 0 0-4.28zm0-9.86a2.14 2.14 0 1 0 0 4.28 2.14 2.14 0 1 0 0-4.28zm8.54-3.38L2.95 6.78v10.45l9.05 5.22 9.05-5.22V6.78zm0 1.6 7.66 13.27H4.34zm-1.390.37L3.97 15.04V7.36zm2.77 0 6.65 3.84v7.67zM5.36 17.44h13.29l-6.65 3.84z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGraphql;
