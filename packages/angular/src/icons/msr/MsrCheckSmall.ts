import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-check-small",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrCheckSmall {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m400-402 250-250q9-9 21-9t21 9q9 9 9 21t-9 21L421-339q-9 9-21 9t-21-9L268-450q-9-9-9-21t9-21q9-9 21-9t21 9l90 90Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrCheckSmall;
