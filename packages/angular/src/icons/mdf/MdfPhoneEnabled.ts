import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-phone-enabled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfPhoneEnabled {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m17.38 10.79-2.2-2.2c-0.28-0.28-0.36-0.67-0.25-1.020.37-1.120.57-2.320.57-3.57 0-0.550.45-1 1-1H20c0.55 0 1 0.45 1 1 0 9.39-7.61 17-17 17-0.55 0-1-0.45-1-1v-3.49c0-0.550.45-1 1-1 1.24 0 2.45-0.2 3.57-0.570.35-0.120.75-0.03 1.020.24l2.2 2.2c2.83-1.45 5.15-3.76 6.59-6.59z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfPhoneEnabled;
