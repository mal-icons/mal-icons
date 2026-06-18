import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-wink-tongue",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsWinkTongue {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 19v-4h-4v4c0 1.10.9 2 2 2s2-0.9 2-2z"}],["path",{"d":"M12 2C6.49 2 2 6.49 2 12c0 4.43 2.9 8.2 6.91 9.51A3.97 3.97 0 0 1 8 19v-2.5C6.41 15.03 6 13 6 13h12s-0.41 2.03-2 3.5V19c0 0.95-0.35 1.82-0.91 2.5C19.1 20.2 22 16.43 22 12c0-5.51-4.49-10-10-10zm-3.5 9a1.5 1.5 0 1 1 0-3A1.5 1.5 0 0 1 8.5 11zm4.5 0s0.5-2 2.5-2c2 0 2.5 2 2.5 2h-5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsWinkTongue;
